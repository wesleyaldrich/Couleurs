from flask import Blueprint, jsonify, request, send_file
from ai.deoldify.visualize import get_image_colorizer
import os

# Suppress known warnings in terminal
import warnings
warnings.filterwarnings("ignore", message="Your training set is empty")
warnings.filterwarnings("ignore", message="Your validation set is empty")
warnings.filterwarnings("ignore", message="The parameter 'pretrained' is deprecated")
warnings.filterwarnings("ignore", message="Arguments other than a weight enum or `None` for 'weights' are deprecated")
warnings.filterwarnings("ignore", message="torch.nn.utils.weight_norm is deprecated")

# Blueprint
couleurs_api = Blueprint('couleurs_api', __name__)

# DeOldify model
colorizer = get_image_colorizer(artistic=True)

# Necessary directories
os.makedirs('static/uploads', exist_ok=True)
os.makedirs('static/colorized', exist_ok=True)

@couleurs_api.route('/images', methods=['POST'])
def upload_image():
    file = request.files['image']
    file_path = os.path.join('static/uploads', file.filename)
    file.save(file_path)

    # Colorize using DeOldify
    colorized_image = colorizer.get_transformed_image(
        path = file_path,
        render_factor = 30, # Recommended range in [20, 40] and lower means faster
        watermarked = False
    )

    # Save colorized image
    colorized_image_path = os.path.join('static/colorized', file.filename)
    colorized_image.save(colorized_image_path)

    return jsonify({"colorized_url": f"/api/images/{file.filename}"})

@couleurs_api.route('/images/<filename>', methods=["GET"])
def get_image(filename):
    return send_file(os.path.join('static/colorized', filename), as_attachment=True)

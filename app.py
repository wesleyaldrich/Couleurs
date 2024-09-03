from flask import Flask, render_template, request, send_file
from ai.deoldify.visualize import get_image_colorizer
import os

app = Flask(__name__)

import warnings
warnings.filterwarnings("ignore", message="Your training set is empty")
warnings.filterwarnings("ignore", message="Your validation set is empty")
warnings.filterwarnings("ignore", message="The parameter 'pretrained' is deprecated")
warnings.filterwarnings("ignore", message="Arguments other than a weight enum or `None` for 'weights' are deprecated")
warnings.filterwarnings("ignore", message="torch.nn.utils.weight_norm is deprecated")

# Initialize DeOldify model
colorizer = get_image_colorizer(artistic=True)  # No device parameter

# Ensure the directories exist
os.makedirs('static/uploads', exist_ok=True)
os.makedirs('static/colorized', exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['image']
    file_path = os.path.join('static/uploads', file.filename)
    file.save(file_path)

    # Colorize the image using DeOldify
    colorized_image = colorizer.get_transformed_image(
        path=file_path,
        render_factor=30,  # Adjust render_factor for image quality
        watermarked=False  # Set to False to avoid watermark
    )

    # Save the colorized image
    colorized_image_path = os.path.join('static/colorized', file.filename)
    colorized_image.save(colorized_image_path)

    return os.path.join('/static/colorized', file.filename)

@app.route('/download/<filename>')
def download(filename):
    return send_file(os.path.join('static/colorized', filename), as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)

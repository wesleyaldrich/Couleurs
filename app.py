from flask import Flask, render_template
from api.couleurs import couleurs_api

app = Flask(__name__)
app.register_blueprint(couleurs_api, url_prefix='/api')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)

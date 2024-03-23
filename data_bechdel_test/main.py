# create flask app
from flask import Flask, render_template, request, redirect, url_for
# authorize all cors
from flask_cors import CORS

# import requests
import requests

app = Flask(__name__,template_folder='dist', static_folder='dist/assets')
CORS(app)


# create routes
@app.route('/')
def home():
    return render_template('index.html')

# create api route
@app.route('/api/<string:imDB>')
def api(imDB="0367631"):
    url = "http://bechdeltest.com/api/v1/getMovieByImdbId?imdbid=" + imDB
    # get data from api
    response = requests.get(url)
    data = response.json()
    print(data)
    return data

# launch app if main.py is run
if __name__ == '__main__':
    app.run(debug=True, port=8080, host='0.0.0.0')
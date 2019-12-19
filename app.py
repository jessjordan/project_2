from flask import Flask
app = Flask(__name__)

@app.route('/')
def us_breweries():
    return 'US Breweries'
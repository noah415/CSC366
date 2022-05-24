from flask import Flask
import flask
import json
from flask_cors import CORS
from models import sqlSelect

app = Flask(__name__)
CORS(app)

@app.route("/users", methods = ["GET"])
def users():
    profiles = sqlSelect.getAllProfiles()

    return flask.jsonify(profiles)

if __name__ == "__main__":
    app.run("localhost", 5000)
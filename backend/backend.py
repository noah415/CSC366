from flask import Flask
import flask
from flask import request
import json
from flask_cors import CORS
from models import sqlSelect
from models import jsonToSQL

app = Flask(__name__)
CORS(app)

@app.route("/insert", methods = ["POST"])
def insert():
    table_name = request.args.get("tablename")
    insert_data = request.get_json()

    


if __name__ == "__main__":
    app.run("localhost", 5000)
from flask import Flask
from flask import request
from flask_cors import CORS
import json
from models import sqlSelect
from models import jsonToSQL
from models import matching

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/insert", methods = ["POST"])
def insert():
    table_name = request.args.get("tablename")
    insert_data = request.get_json()
    result = jsonToSQL.select(table_name, insert_data)

    if (result == None):
        return result, 500
    else:
        return json.dumps(result), 200



@app.route("/matches")
def getMatches():
    profileId = request.args.get("profileId", default = 0, type = int)
    profileValues = sqlSelect.getRealValuesByProfile(profileId)
    onetValues =  sqlSelect.getAllJobProfileValues()
    onetJobs =  sqlSelect.getAllONETJobs()
    matches = matching.get_recommendations(profileValues, onetValues, onetJobs)
    return matches

if __name__ == "__main__":
    app.run("localhost", 5000)
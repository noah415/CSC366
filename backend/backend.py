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
    result = jsonToSQL.insert(table_name, insert_data)

    if (result == None):
        return result, 500
    else:
        if table_name == 'Profiles':
            insertMatches(table_name)
        return json.dumps(result), 200


@app.route("/matches/real")
def getRealMatches():
    profileId = request.args.get("profileId", default = 0, type = int)
    profileValues = sqlSelect.getRealValuesByProfile(profileId)
    onetValues =  sqlSelect.getAllJobProfileValues()
    onetJobs =  sqlSelect.getAllONETJobs()
    matches = json.dumps(matching.get_recommendations(profileValues, onetValues, onetJobs, 'real'), indent=4, sort_keys=True)
    return matches

@app.route("/valueCharacteristics")
def getVCs():
    return json.dumps(sqlSelect.getValueCharacteristics())

if __name__ == "__main__":
    app.run("localhost", 5000)
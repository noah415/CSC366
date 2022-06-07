from crypt import methods
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
        return 500
    else:
        return 200

@app.route("/select", methods = ["POST"])
def select():
    table_name = request.args.get("tablename")
    select_data = request.get_json()
    print(select_data)
    result = jsonToSQL.select(table_name, select_data)
    print(result)

    if (result == None):
        return result, 500
    else:
        return json.dumps(result), 200

@app.route("/delete", methods = ["DELETE"])
def delete():
    table_name = request.args.get("tablename")
    delete_data = request.get_json()
    result = jsonToSQL.delete(table_name, delete_data)

    if (result == None):
        return 500
    else:
        return 200

@app.route("/selectall", methods = ["GET"])
def selectAll():
    table_name = request.args.get("tablename")
    result = jsonToSQL.selectAll(table_name)

    if (result == None):
        return result, 500
    else:
        return json.dumps(result), 200


@app.route("/matches/real", methods = ["GET"])
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
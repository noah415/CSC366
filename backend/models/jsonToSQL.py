from inspect import Attribute
from select import select
import mysql.connector

config = {
  'user': 'group4a',
  'password': 'y{,3rSyw]}4~9JB7',
  'host': 'mysql.labthreesixfive.com',
  'database': 'group4a',
  'raise_on_warnings': True
}

cnx = mysql.connector.connect(**config)
cursor = cnx.cursor(dictionary=True, buffered=True)


def readJson(attributes, values, data):
  for key, value in data.items():
    attributes.append(key)
    values.append(value)

  for i in range(len(values)):
    if isinstance(values[i], str):
      values[i] = "'" + values[i] + "'"
    elif isinstance(values[i], int) or isinstance(values[i], float):
      values[i] = str(values[i])

def execute(query):
  try:
    cursor.execute(query)
    cnx.commit()
    return True
  except:
    print("error executing query:",query)
    return False


def insert(table_name, insert_data):
  attributes = []
  values = []

  readJson(attributes, values, insert_data)

  query = "Insert INTO {} ({}) values({})".format(table_name, ",".join(attributes), ",".join(values))
  print(query)
  return execute(query)



def delete(table_name, delete_data):
  attributes = []
  values = []
  conditions = []

  readJson(attributes, values, delete_data)

  for i in range(len(attributes)):
    condition = "{} = {}".format(attributes[i], values[i])
    conditions.append(condition)

  query = "DELETE FROM {} WHERE {}".format(table_name, " and ".join(conditions))

  return(execute(query))


def select(table_name, select_data):
  attributes = []
  values = []
  conditions = []
  data = None

  readJson(attributes, values, select_data)
  for i in range(len(attributes)):
    condition = "{} = {}".format(attributes[i], values[i])
    conditions.append(condition)

  query = "SELECT * FROM {} WHERE {}".format(table_name, " and ".join(conditions))
  print(query)

  if(execute(query)):
    try:
      data = cursor.fetchall()
    except:
      print("Failed to retrieve data")
  return data

dd = {
  "sId": 4,
  "Age": "pink"
}
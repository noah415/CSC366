import pandas as pd
import math
from datetime import datetime

FILENAMES = [
"SurveyQuestions.csv"
]
TABLENAMES = [
"Questions"
]
DATASET = "group4a"

TEST_STRING = ""
CLEANUP_STRING = ""
for i in range(len(FILENAMES)):
  FILENAME = FILENAMES[i]
  TABLENAME = TABLENAMES[i]
  buildname = FILENAME.partition('.')[0]

  df_list = pd.read_csv(FILENAME)
  to_insert = ""
  for x in df_list:
    if x != "State" and x != "Drink":
        to_insert += x + ", "
  to_insert = to_insert[:-2]

  strings = ""
  for tupleVal in df_list.values:
    string = "INSERT INTO " + TABLENAME + " (" + to_insert + ") VALUES ("
    for att in tupleVal:
      string += str(att) + ", "
    string = string[:-2]
    string += ");"
    strings += string + "\n"
  build = open(DATASET + "-build-" + buildname + ".sql", "x")
  build.write(strings)
  build.close()

  TEST_STRING += "SELECT * FROM " + TABLENAME + ";\n"
  CLEANUP_STRING += "DROP TABLE " + TABLENAME + ";\n"

clean = open(DATASET + "-cleanup.sql", "x")
clean.write(CLEANUP_STRING)
clean.close()

test = open(DATASET + "-test.sql", "x")
test.write(TEST_STRING)
test.close()
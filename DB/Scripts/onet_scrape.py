
from time import sleep
import re
from warnings import warn
from time import time
from IPython.core.display import clear_output
import numpy as np
import pandas as pd
import requests
from bs4 import BeautifulSoup

post_timing = []
post_title_texts = []
bedroom_counts = []
sqfts = []
post_links = []
post_prices = []

response = requests.get("https://www.onetonline.org/find/stem?t=0")

if response.status_code != 200:
    warn('Request: {}; Status code: {}'.format(requests, response.status_code))
    
page_html = BeautifulSoup(response.text, 'html.parser')

out = ""
stem_codes = []
#fd = open("out5.sql", 'a')
for job in page_html.find_all('tr')[1:]:
  for td in job.find_all('td'):
    if td["data-title"] == "Code":
      jobcode = td.text
      stem_codes.append(jobcode)
    elif td["data-title"] == "Occupation Types":
      jobtype = td.text
    elif td.find('a') is not None:
      a = td.find('a')
      jobtitle = a.text
      link = str(a['href'])
      #sleep(1)
      #response = requests.get(link)
      #if response.status_code != 200:
          #warn('Request: {}; Status code: {}'.format(requests, response.status_code))
      #prof_html = BeautifulSoup(response.text, 'html.parser')
      
      #description = prof_html.find_all('p')[0].text
  #string = ''.join(c for c in jobcode if c.isdigit()) + ", " + "'" + link + "', " + "'" + jobtitle + "', " + "'" + jobtype + "', " + "'" + description + "'"
  #insert = "INSERT INTO ONetJobs values(" + string + ");"
  #out += insert + '\n'
#fd.write(out)
#fd.close()

stem_codes

import sys

import contextlib
import math
from contextlib import ContextDecorator
def getCharacteristicValues(links):
  max_values = {stem_code: 0 for stem_code in stem_codes}
  for link in links:
    response = requests.get(link)
    if response.status_code != 200:
        warn('Request: {}; Status code: {}'.format(requests, response.status_code))
    temp_html = BeautifulSoup(response.text, 'html.parser')
    codes = []
    importances = []
    levels = []
    context = []
    for job in temp_html.find_all('tr')[1:]:
      jobcode = "None"
      importance = "None"
      level = "None"
      context = "None"
      for td in job.find_all('td'):
        if td["data-title"] == "Code":
          jobcode = td.text
        if td["data-title"] == "Importance":
          importance = int(td["data-text"])
        if td["data-title"] == "Level":
          level = int(td["data-text"])
        if td["data-title"] == "Context":
          context = int(td["data-text"])
      if jobcode in stem_codes:
        if level != "None":
          if level > max_values[jobcode]:
            max_values[jobcode] = math.ceil(level*7/100)
        elif context != "None":
          if context > max_values[jobcode]:
            max_values[jobcode] = math.ceil(context*7/100)
        elif importance != "None":
          if importance > max_values[jobcode]:
            max_values[jobcode] = math.ceil(importance*7/100)
  return max_values

spreadsheet = pd.read_excel('/content/O-Net Computer Science Template for Survey_5_13_2022.xlsx')
value_characteristic_col = spreadsheet.loc[:, 'From Advanced Search'][5:]

fd = open("JobProfileValues-insert.sql", 'a')
for i in range(len(value_characteristic_col)):
  value_characteristic = value_characteristic_col.get(i)
  print(value_characteristic)
  if not pd.isnull(value_characteristic) and value_characteristic != 'Knowledge Characteristics' and value_characteristic != 'Social Characteristics':
    links = spreadsheet.iloc[i][spreadsheet.iloc[i].isna() == False]
    max_values = getCharacteristicValues(links[1:])
    for jobcode, value in max_values.items():
      if value > 0:
        contents = ''.join(c for c in jobcode if c.isdigit()) + ", " + "'" + value_characteristic + "', " + str(value)
        insert_statement = "INSERT INTO JobProfileValues values(" + contents + ");\n"
        fd.write(insert_statement)
fd.close()

from scipy.spatial.distance import cosine

def get_similarity(df1, df2):
  joined = df1.set_index('vcId').join(df2.set_index('vcId')).dropna()
  return 1 - cosine(joined["realValue"], joined["jobProfileValue"])

def get_recommendations(df_toRecommend, df_ONETJPV):
  stem_job_codes = df_ONETJPV.jobId.unique()
  df_out = pd.DataFrame(columns = ['jobId', 'Similarity'])
  
  for job_code in stem_job_codes:
    df_out = df_out.append({'jobId' : job_code, 'Similarity' : get_similarity(df_toRecommend, df_ONETJPV[df_ONETJPV['jobId'] == job_code])}, ignore_index = True)

  return df_out.sort_values(by=['Similarity'])


import mysql

config = {
  'user': 'group4a',
  'password': 'y{,3rSyw]}4~9JB7',
  'host': 'mysql.labthreesixfive.com',
  'database': 'group4a',
  'raise_on_warnings': True
}

cnx = mysql.connector.connect(**config)
cursor = cnx.cursor(dictionary=True, buffered=True)
def executeFetchAll(query):
    cursor.execute(query)
    result = cursor.fetchall()
    return result


def executeFetchOne(query):
    cursor.execute(query)
    result = cursor.fetchone()
    return result


#get all profiles
def getAllProfiles():
    query = ("Select * from Profile")
    executeFetchAll(query)

getAllProfiles()
from multiprocessing import parent_process
import mysql.connector
import json

config = {
  'user': 'group4a',
  'password': 'y{,3rSyw]}4~9JB7',
  'host': 'mysql.labthreesixfive.com',
  'database': 'group4a',
  'raise_on_warnings': True
}
def openConnection():
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor(dictionary=True, buffered=True)
    return cnx, cursor

def executeFetchAll(query, parameters):
    cnx, cursor = openConnection()
    cursor.execute(query, parameters)
    result = cursor.fetchall()
    cnx.close()
    return result


def executeFetchOne(query, parameters):
    cnx, cursor = openConnection()
    cursor.execute(query, parameters)
    result = cursor.fetchone()
    cnx.close()
    return result


#get all profiles
def getAllProfiles():
    query = ("Select * from Profile")
    return executeFetchAll(query, [])

def getAllONETJobs():
    query = ("Select * from ONetJobs")
    return executeFetchAll(query, [])

def getAllJobProfileValues():
    query = ("Select * from JobProfileValues")
    return executeFetchAll(query, [])
    
def getProfileById(profileId):
    query =  ("""Select * from Profile 
                Where ProfileId = %s""")
    return executeFetchOne(query, [profileId])

def getValueCharacteristics():
    query =  ("Select * from ValueCharacteristics") 
    return executeFetchAll(query, [])

#get profile Values
def getRealValuesByProfile(profileId):
    query =  ("""Select * from RealValues
                Where ProfileId = %s""")

    return executeFetchAll(query, [profileId])

def getDesiredValuesByProfile(profileId):
    query =  ("""Select * from DesiredValue
                Where ProfileId = %s""")

    return executeFetchAll(query, [profileId])

#experiences
def getAllExperiences():
    query = ("Select * from Experiences")
    return executeFetchAll(query, [])

def getExperienceByProfileId(profileId):
    query = ("""Select * from Experiences
                Where ProfileId = %s""")
    return executeFetchOne(query, [profileId])

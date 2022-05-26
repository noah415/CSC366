from multiprocessing import parent_process
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

def executeFetchAll(query, parameters):
    cursor.execute(query)
    result = cursor.fetchall()
    print(result)
    return result


def executeFetchOne(query, parameters):
    cursor.execute(query, parameters)
    result = cursor.fetchone()
    print(result)
    return result


#get all profiles
def getAllProfiles():
    query = ("Select * from Profile")
    executeFetchAll(query, [])
    
def getProfileById(profileId):
    query =  ("""Select * from Profile 
                Where ProfileId = %s""")
    executeFetchOne(query, [profileId])

def getValueCharacteristics():
    query =  ("Select * from ValueCharacteristics") 
    executeFetchAll(query, [])

#get profile Values
def getRealValuesByProfile(profileId):
    query =  ("""Select * from RealValues
                Where ProfileId = %s""")

    executeFetchAll(query, [profileId])

def getRealDesiredByProfile(profileId):
    query =  ("""Select * from DesiredValues
                Where ProfileId = %s""")

    executeFetchAll(query, [profileId])

#experiences
def getAllExperiences():
    query = ("Select * from Experiences")
    executeFetchAll(query, [])

def getExperienceByProfileId(profileId):
    query = ("""Select * from Experiences
                Where ProfileId = %s""")
    executeFetchOne(query, [profileId])

getProfileById(3)

getExperienceByProfileId(10)

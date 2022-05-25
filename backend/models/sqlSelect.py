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
    
def getProfileById(profileId):
    query =  ("""Select * from Profile 
                Where ProfileId = %s""")
    executeFetchOne(query)

def getValueCharacteristics():
    query =  ("Select * from ValueCharacteristics") 
    executeFetchAll(query)

#get profile Values
def getRealValuesByProfile(profileId):
    query =  ("""Select * from RealValues
                Where ProfileId = %s""")

    executeFetchAll(query)

def getRealDesiredByProfile(profileId):
    query =  ("""Select * from DesiredValues
                Where ProfileId = %s""")

    executeFetchAll(query)

#experiences
def getAllExperiences():
    query = ("Select * from Profile")
    executeFetchAll(query)

def getExperienceByProfileId(profileId):
    query = ("Select * from Profile")
    executeFetchAll(query)


cnx.close()
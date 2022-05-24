import mysql.connector

config = {
  'user': 'group4a',
  'password': 'y{,3rSyw]}4~9JB7',
  'host': 'mysql.labthreesixfive.com',
  'database': 'group4a',
  'raise_on_warnings': True
}

cnx = mysql.connector.connect(**config)
cursor = cnx.cursor()

#get all profiles
def getAllProfiles():
    profiles = []
    query = ("Select * from Profile")

    cursor.execute(query)
    for (profileId, dateCreated, name, accountID, profileType) in cursor:
        profile = {
                "profileId": profileId, 
                "dateCreated": dateCreated,
                "name": name,
                "accountID": accountID,
                "profileType": profileType}
        profiles.append(profile)
        print(profileId, dateCreated, name, accountID, profileType)
    return profiles


cnx.close()
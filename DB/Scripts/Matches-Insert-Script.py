
from backend.models import sqlSelect
from backend.models import matching
import pandas as pd
import json

profiles = pd.DataFrame(sqlSelect.getAllProfiles())
realProf = profiles[profiles["profileType"] == "Real"]
desProf = profiles[profiles["profileType"] == "Desired"]


fd = open("Matches-insert.sql", 'a')

for i in range(min(realProf.profileId), max(realProf.profileId)+1):
    realId = i
    profileValues = sqlSelect.getRealValuesByProfile(realId)
    onetValues =  sqlSelect.getAllJobProfileValues()
    onetJobs =  sqlSelect.getAllONETJobs()
    matches = matching.get_recommendations(profileValues, onetValues, onetJobs, 'real')
    for j in range(len(matches)):
        match = matches[j]
        jobProfileId = str(match['jobId'])
        matchRank = str(j+1)
        profileId = str(i)
        MatchSimilarity = str(match['Similarity'])
        insert = "INSERT INTO Matches values(" + jobProfileId + ', ' + matchRank + ', ' + profileId + ', ' + '"2022-05-26"' + ', ' + MatchSimilarity + ');\n'
        fd.write(insert)

for i in range(min(desProf.profileId), max(desProf.profileId)+1):
    realId = i
    profileValues = sqlSelect.getDesiredValuesByProfile(realId)
    onetValues =  sqlSelect.getAllJobProfileValues()
    onetJobs =  sqlSelect.getAllONETJobs()
    matches = matching.get_recommendations(profileValues, onetValues, onetJobs, 'desired')
    for j in range(len(matches)):
        match = matches[j]
        jobProfileId = str(match['jobId'])
        matchRank = str(j+1)
        profileId = str(i)
        MatchSimilarity = str(match['Similarity'])
        insert = "INSERT INTO Matches values(" + jobProfileId + ', ' + matchRank + ', ' + profileId + ', ' + '"2022-05-26"' + ', ' + MatchSimilarity + ');\n'
        fd.write(insert)

fd.close()
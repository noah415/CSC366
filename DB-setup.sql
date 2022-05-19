DROP TABLE TextResponses;

DROP TABLE OptionResponses;

DROP TABLE AnswerOptions;

DROP TABLE Questions;

DROP TABLE Matches;

DROP TABLE JobProfileValues;

DROP TABLE DesiredValue;

DROP TABLE RealValues;

DROP TABLE ValueCharacteristics;
  
DROP TABLE ONetJobs;
   
DROP TABLE Experiences;
    
DROP TABLE Surveys;

DROP TABLE Profile;

DROP TABLE Accounts;

CREATE TABLE Accounts(
   id INT NOT NULL AUTO_INCREMENT,
   role varchar(40),
   name varchar(45),
   email varchar(100),
   hashedPasssword varchar(32),
   PRIMARY KEY(id),
   UNIQUE (email)
);
  
CREATE TABLE Surveys(
   id INT NOT NULL AUTO_INCREMENT,
   description VARCHAR(256),
   name VARCHAR(64),
   type VARCHAR(64),
   PRIMARY KEY(id)
);
          
CREATE TABLE Profile(
   profileId int NOT NULL AUTO_INCREMENT,
   dateCreated date,
   name varchar(20),
   accountID int,
   profileType varchar(10),
   Primary Key (profileId),
   Foreign Key(accountId) references Accounts(id)
);

CREATE TABLE Experiences(
   id INT NOT NULL AUTO_INCREMENT,
   dateTaken date,
   profileId INT,
   sId INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(profileId) REFERENCES Profile(profileId),
   FOREIGN KEY(sId) REFERENCES Surveys(id)
);
              
CREATE TABLE ONetJobs(
   jobId int NOT NULL AUTO_INCREMENT,
   url varchar(128),
   jobTitle varchar(60),
   field varchar(40),
   description varchar(400),
   Primary Key(jobId),
   Unique(jobTitle, field)
);
                
CREATE TABLE ValueCharacteristics(
   name varchar(40),
   description varchar(512),
   type varchar(100),
   Primary Key (name)
);
                      
CREATE TABLE RealValues(
   vcId varchar(40),
   profileId int NOT NULL,
   realValue decimal(10,5),
   Primary Key(vcId, profileId),
   Foreign Key(vcId) references ValueCharacteristics(name),
   Foreign Key(profileID) references Profile(profileId)
);
                          
CREATE TABLE DesiredValue(
   vcId varchar(40),
   profileId int NOT NULL,
   desiredValue int,
   importance int,
   Primary Key(vcId, profileID),
   Foreign Key(vcId) references ValueCharacteristics(name),
   Foreign Key(profileID) references Profile(profileId)
);
                             
CREATE TABLE JobProfileValues(
   jobId int NOT NULL,
   vcId varchar(40),
   jobProfileValue int,
   Primary Key(jobId),
   Foreign Key(jobId) references ONetJobs(jobId),
   Foreign Key(vcId) references ValueCharacteristics(name)
);
                               
CREATE TABLE Matches(
   jobProfileId int NOT NULL,
   matchRank int,
   profileId int NOT NULL,
   DateMatched date,
   MatchSimiliarity decimal(10, 5),
   Primary Key(jobProfileId, profileID),
   Foreign Key(jobProfileId) references ONetJobs(jobId),
   Foreign Key(profileID) references Profile(profileID)
);

CREATE TABLE Questions(
   sId INT NOT NULL,
   position INT NOT NULL,
   prompt VARCHAR(512),
   questionType varchar(50),
   valueCharachteristic varchar(100),
   PRIMARY KEY(sId, position),
   FOREIGN KEY(sId) REFERENCES Surveys(id),
   FOREIGN KEY(valueCharachteristic) REFERENCES ValueCharacteristics(name)
);
                                 
 CREATE TABLE AnswerOptions(
   sId INT NOT NULL,
   qPosition INT NOT NULL,
   position INT NOT NULL,
   optionValue VARCHAR(512),
   PRIMARY KEY(sId, qPosition, position),
   FOREIGN KEY(sId, qPosition) REFERENCES Questions(sId, position)
);
                                   
                                    
CREATE TABLE OptionResponses(
   eId INT NOT NULL,
   sId INT NOT NULL,
   questionPosition INT NOT NULL,
   optionPosition INT NOT NULL,
   PRIMARY KEY(eId, sId, questionPosition, optionPosition),
   FOREIGN KEY(eId) REFERENCES Experiences(id),
   FOREIGN KEY(sId, questionPosition, optionPosition) REFERENCES AnswerOptions(sId, qPosition, position)
);
                                      
CREATE TABLE TextResponses(
   eId INT NOT NULL,
   sId INT NOT NULL,
   questionPosition INT NOT NULL,
   answer VARCHAR(256),
   PRIMARY KEY(eId, sId, questionPosition),
   FOREIGN KEY(eId) REFERENCES Experiences(id),
   FOREIGN KEY(sId, questionPosition) REFERENCES Questions(sId, position)
);

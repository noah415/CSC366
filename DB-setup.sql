--BUILDS TABLES FOR ONET
--CSC366
--GROUP MID ALPHABET

CREATE TABLE Accounts(
      id int,
      name varchar(45),
      email varchar(100),
      hashedPasssword varchar(32),
      PRIMARY KEY(id),
      UNIQUE (email)
  );
  
  CREATE TABLE Surveys(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(64),
    type VARCHAR(64),
    PRIMARY KEY(id)
  );
  
  CREATE TABLE Experiences(
    id INT NOT NULL AUTO_INCREMENT,
    accountId INT,
    sId INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(accountId) REFERENCES Accounts(id),
    FOREIGN KEY(sId) REFERENCES Surveys(id)
  );
  
  CREATE TABLE Profile(
      profileId int NOT NULL AUTO_INCREMENT,
      dateCreated date,
      metadata varchar(20),
      experienceID int,
      profileType varchar(10),
      Primary Key (profileId),
      Foreign Key(experienceId) references Experiences(id)
  );
  
  CREATE TABLE ONetJobs(
      jobId int NOT NULL AUTO_INCREMENT,
      jobTitle varchar(60),
      field varchar(40),
      description varchar(400),
      Primary Key(jobId),
      Unique(jobTitle, field)
  );
  
  CREATE TABLE ValueCharacteristics(
      id int NOT NULL AUTO_INCREMENT,
      name varchar(40),
      description varchar(512),
      Primary Key (id)
  );
  
  CREATE TABLE RealValues(
    vcId int NOT NULL,
    profileId int NOT NULL,
    realValue int,
    Primary Key(vcId, profileID),
    Foreign Key(vcId) references ValueCharacteristics(id),
    Foreign Key(profileID) references Profile(profileID)
  );
  
  CREATE TABLE DesiredValue(
    vcId int NOT NULL,
    profileId int NOT NULL,
    importance int,
    desiredValue int,
    Primary Key(vcId, profileID),
    Foreign Key(vcId) references ValueCharacteristics(id),
   Foreign Key(profileID) references Profile(profileID)
 );
 
 CREATE TABLE JobProfileValues(
     jobId int NOT NULL,
     vcId int NOT NULL,
     jobProfileValue int,
     Primary Key(jobId),
     Foreign Key(jobId) references ONetJobs(jobId),
     Foreign Key(vcId) references ValueCharacteristics(id)
 );
 
 CREATE TABLE Matches(
   jobProfileId int NOT NULL,
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
   PRIMARY KEY(sId, position),
   FOREIGN KEY(sId) REFERENCES Surveys(id)
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

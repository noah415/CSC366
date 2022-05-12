--BUILDS TABLES FOR ONET
--CSC366
--GROUP MID ALPHABET

CREATE TABLE Accounts(
    id int,
    name varchar(45),
    email varchar(100),
    hashedPasssword varchar(32),
    Primary Key(id),
    UNIQUE (email)
)

CREATE TABLE Surveys(
  id INT AUTO_INCREMENT,
  name VARCHAR(64),
  type VARCHAR(64),
  PRIMARY KEY(id)
)

CREATE TABLE Experiences(
  id INT AUTO_INCREMENT,
  accountId,
  sId INT,
  PRIMARY KEY(id),
  FOREIGN KEY(accountId) REFERENCES Accounts(id),
  FOREIGN KEY(sId) REFERENCES Surveys(id)
)

CREATE TABLE Profile(
    profileId int AUTO_INCREMENT,
    dateCreated date,
    metadata varchar(20),
    experienceID int,
    profileType varchar(), --REAL OR DESIRED
    Primary Key (profileId),
    Foreign Key(experienceId) references Experiences(id)
)

CREATE TABLE ONetJobs(
    jobId int AUTO_INCREMENT,
    jobTitle varchar(60),
    field varchar(40),
    description varchar(400),
    Primary Key(jobId),
    Unique(jobTitle, field)
)

CREATE TABLE ValueCharacteristics(
    id int AUTO_INCREMENT,
    name varchar(40),
    description varchar(512)
)

CREATE TABLE RealValues(
  vcId int,
  profileId int,
  realValue int,
  Primary Key(vcId, profileID),
  Foreign Key(vcId) references ValueCharacteristics(id),
  Foreign Key(profileID) references Profile(profileID)
)

CREATE TABLE DesiredValue(
  vcId int,
  profileId int,
  importance int,
  desiredValue int,
  Primary Key(vcId, profileID),
  Foreign Key(vcId) references ValueCharacteristics(id),
  Foreign Key(profileID) references Profile(profileID)
)

CREATE TABLE JobProfileValues(
    jobId int,
    vcId varchar(40),
    jobProfileValue int,
    Primary Key(jobId),
    Foreign Key(jobId) references ONetJobs(jobId),
    Foreign Key(vcId) references ValueCharacteristics(id)
)

CREATE TABLE Matches(
  jobProfileId int,
  profileId int,
  DateMatched date,
  MatchSimiliarity decimal(10, 5)
  Primary Key(jobProfileId, profileID),
  Foreign Key(jobProfileId) references ONETJobs(id),
  Foreign Key(profileID) references Profile(profileID)
)


CREATE TABLE Questions(
  sId INT,
  position INT,
  prompt VARCHAR(512),
  PRIMARY KEY(sId, position),
  FOREIGN KEY(sId) REFERENCES Surveys(id)
)

CREATE TABLE AnswerOptions(
  sId INT,
  qPosition INT,
  position INT,
  optionValue VARCHAR(512),
  PRIMARY KEY(sId, qPosition, position),
  FOREIGN KEY(sId) REfERENCES Surveys(id),
  FOREIGN KEY(qPosition) REFERENCES Questions(position)
)


CREATE TABLE OptionResponses(
  eId INT,
  sId INT,
  questionPosition INT,
  optionPosition INT,
  PRIMARY KEY(eId, sId, questionPosition, optionPosition),
  FOREIGN KEY(eId) REFERENCES Experiences(id),
  FOREIGN KEY(sId) REFERENCES Surveys(id),
  FOREIGN KEY(questionPosition) REFERENCES Questions(position),
  FOREIGN KEY(optionPosition) REFERENCES AnswerOptions(position)
)

CREATE TABLE TextResponses(
  eId INT,
  sId INT,
  questionPosition INT,
  answer VARCHAR(256),
  PRIMARY KEY(eId, sId, questionPosition),
  FOREIGN KEY(eId) REFERENCES Experiences(id),
  FOREIGN KEY(sId) REFERENCES Surveys(id),
  FOREIGN KEY(questionPosition) REFERENCES Questions(position)
)

CREATE TABLE Surveys(
  id INT AUTO_INCREMENT,
  name VARCHAR(64),
  type VARCHAR(64),
  PRIMARY KEY(id),
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

CREATE TABLE Experiences(
  id INT AUTO_INCREMENT,
  username VARCHAR(45),
  sId INT,
  PRIMARY KEY(id),
  FOREIGN KEY(username) REFERENCES Accounts(username)
)

CREATE TABLE OptionResponses(
  eId INT,
  sId INT,
  position INT,
  answer INT,
  PRIMARY KEY(eId, sId, position),
  FOREIGN KEY(eId) REFERENCES Experiences(id),
  FOREIGN KEY(sId) REFERENCES Surveys(id),
  FOREIGN KEY(position) REFERENCES Questions(position)
)

CREATE TABLE TypedResponses(
  eId INT,
  sId INT,
  position INT,
  answer VARCHAR(256),
  PRIMARY KEY(eId, sId, position),
  FOREIGN KEY(eId) REFERENCES Experiences(id),
  FOREIGN KEY(sId) REFERENCES Surveys(id),
  FOREIGN KEY(position) REFERENCES Questions(position)
)
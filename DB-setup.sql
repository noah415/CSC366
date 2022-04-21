CREATE TABLE Surveys(
  id INT AUTO_INCREMENT,
  name VARCHAR(64),
  type VARCHAR(64),
  PRIMARY KEY(id),
)

CREATE TABLE Questions(
  sId INT,
  position INT,
  prompt VARCHAR(256),
  PRIMARY KEY(sId, position),
  FOREIGN KEY(sId)
)

CREATE TABLE AnswerOptions(
  sId INT,
  position INT,
  optionValue VARCHAR(256),
  PRIMARY KEY(sId, position),
  FOREIGN KEY(sId)
)

CREATE TABLE Experiences(
  id INT AUTO_INCREMENT,
  PRIMARY KEY(id)
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
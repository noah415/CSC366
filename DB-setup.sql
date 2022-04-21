CREATE TABLE Accounts(
    username varchar(45),
    hashedPasssword varchar(30),
    email varchar(100),
    Primary Key(username)
)

CREATE TABLE Profile(
    profileId int AUTO_INCREMENT,
    dateCreated date,
    descriptor varchar(20),
    Primary Key (profileId)
)

CREATE TABLE RealProfile(
    profileId int,
    experienceId int,
    Primary Key(profileId),
    Foreign Key(experienceId) references ...
)

CREATE TABLE ProfileDimensions(
    dimensionName varchar(40),
)

CREATE TABLE ONetJobs(
    jobId int AUTO_INCREMENT,
    jobTitle varchar(60),
    field varchar(40),
    description varchar(400),
    Primary Key(jobId),
    Unique(jobTitle, field)
)


CREATE TABLE JobProfileValues(
    jobId int,
    dimensionName varchar(40),
    value int,
    Primary Key(jobId),
    Foreign Key(jobId) references ONetJobs(jobId),
    Foreign Key(dimensionName) references ProfileDimensions(dimensionName)
)


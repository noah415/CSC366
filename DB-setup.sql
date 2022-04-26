CREATE TABLE Accounts(
    username varchar(45),
    hashedPasssword varchar(32),
    email varchar(100),
    Primary Key(username)
)

CREATE TABLE Profile(
    profileId int AUTO_INCREMENT,
    dateCreated date,
    metadata varchar(20),
    experienceID int,
    profileType varchar(),
    Primary Key (profileId),
    Foreign Key(experienceId) references Experiences(id)
)

-- CREATE TABLE RealProfile(
--     profileId int,
--     experienceId int,
--     Primary Key(profileId),
--     Foreign Key(experienceId) references ...
-- )

CREATE TABLE ValueCharacteristics(
    id int AUTO_INCREMENT,
    name varchar(40),
    description varchar(512)
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
    vcId varchar(40),
    value int,
    Primary Key(jobId),
    Foreign Key(jobId) references ONetJobs(jobId),
    Foreign Key(vcId) references ValueCharacteristics(id)
)


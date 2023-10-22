CREATE TABLE IF NOT EXISTS Acronyms (
    id serial PRIMARY KEY,
    Acronym VARCHAR(255) NOT NULL,
    Definition TEXT
);

INSERT INTO Acronyms( Acronym, Definition) VALUES(ATM, At the moment);
INSERT INTO Acronyms( Acronym, Definition) VALUES(ASAP, As soon possible);
INSERT INTO Acronyms( Acronym, Definition) VALUES(AMA, Ask me anything);
INSERT INTO Acronyms( Acronym, Definition) VALUES(BAK, Back at keyboard);
INSERT INTO Acronyms( Acronym, Definition) VALUES(BTW, By the way);

select * from Acronyms
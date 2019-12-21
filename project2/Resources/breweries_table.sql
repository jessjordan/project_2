CREATE TABLE us_breweries 
(
	Types_Of_Breweries VARCHAR (30) NOT NULL,
	Year_2014 integer NOT NULL,
	Year_2015 integer NOT NULL,
	Year_2016 integer NOT NULL,
	Year_2017 integer NOT NULL,
	Year_2018 integer NOT NULL
);

INSERT INTO us_breweries (Types_Of_Breweries, Year_2014, Year_2015, Year_2016, Year_2017, Year_2018)
VALUES
	('Craft', 3814, 4628, 5539, 6490, 7346),
	('Regional Craft', 135, 178, 186, 202, 230),
	('Microbrewery', 2076, 2626, 3251, 3933, 4522),
	('Brewpubs', 1603, 1824, 2102, 2355, 2594),
	('Large Non-Craft Brewery', 46, 44, 67, 106, 104);
	
select * from us_breweries
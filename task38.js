// Task 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.
// part I
function describe_city(cityN, country1) {
    console.log(`Task 38: ${cityN} is in ${country1}.`)

}

describe_city("Sahiwal", "Pakistan");

// part II
var cityName1 = "Multan";
var cityName2 = "IslamAbad";
var cityName3 = " Peshawar";
var countryName = "Pakistan"

describe_city(cityName1, countryName);
describe_city(cityName2, countryName);
describe_city(cityName3, countryName);

describe_city("Hyderabad", 'Pakistan');
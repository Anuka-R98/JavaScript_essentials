const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
  }

  /// forEach

  companies.forEach(function(company) {
    console.log(company);
  });
  companies.forEach((company) => {
    console.log(company.name);
  });

/***********************************************************************************************/

  /// filter
  //Get 21 and older people who are allowed to drink

  let canDrink = [];

  for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
  }

  const canDrink = ages.filter(function(age) {
    if(age >= 21)
        return true;
  });

  const canDrink = ages.filter(age => age >= 21);

  console.log(canDrink);

const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail')
        return true;
});

const retailCompanies = companies.filter(comp => comp.category === 'Retail');

console.log(retailCompanies);  

//Get companies that started in 80s

const eightiesComp = companies.filter( (comp)  => {
    if(comp.start >= 1980 && comp.start < 1990)
        return true;
});

const eightiesComp = companies.filter(comp =>(comp.start >= 1980 && comp.start < 1990));
console.log(eightiesComp);

//Get companies that lasted more than 10 years

const lasted10Years = companies.filter(comp => (comp.end - comp.start >= 10));
console.log(lasted10Years);

/***********************************************************************************************/

  /// map

const companyNames = companies.map(function(comp) {
  return comp.name;
});
console.log(companyNames);

const testMap = companies.map((comp) => {
  return `${comp.name} : [${comp.start} - ${comp.end}]`
});

const testMap = companies.map(comp => `${comp.name} : [${comp.start} - ${comp.end}]`);
onsole.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age*2);

const agesSqTimesTwo = ages
  .map(age => Math.sqrt(age))
  .map(age => age*2);

console.log(agesSquare);
console.log(agesTimesTwo);
console.log(agesSqTimesTwo);


/***********************************************************************************************/

  /// sort

  //Companies stated date sorted by year
  const sortedByYear = companies.sort(function(c1, c2) {
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
  });
  
  const sortedByYear = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
  console.log(sortedByYear);

  // Ages sorted lowest to Highest
  const agesSort = ages.sort((a,b) => (a > b ? 1 : -1));
  // Ascending
  const agesSortA = ages.sort((a,b) => (a - b)); 
  // Descending
  const agesSortD = ages.sort((a,b) => (b - a));
  console.log(agesSortA);
  console.log(agesSortD);

/***********************************************************************************************/

  /// reduce

  let ageSum = 0;
  for(i=0; i<ages.length; i++){
    ageSum += ages[i];
  }
  const ageSum = ages.reduce(function(total, age) {
    return total + age;
  }, 0); 

  const ageSum = ages.reduce((total, age) => total + age, 0);
  console.log(ageSum);

//Get total years for all companies

const totYearsCompanies = companies.reduce((total, comp) => total + (comp.end - comp.start), 0);
console.log(totYearsCompanies);

/***********************************************************************************************/

/// Combine All Methodes

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a,b) => a - b)
  .reduce((a,b) => a + b, 0);

console.log(combined);
const cities = [
    { name: 'Kaliningrad', population: 482443 },
    { name: 'Moscow', population: 12506468 },
    { name: 'Novosibirsk', population: 1612833 },
    { name: 'Saint Petersburg', population: 5351935 },
    { name: 'Kaluga', population: 336726 }
];

cities.filter(e => e.population < 1000000)
    .sort((a, b) => b.population - a.population)
    .forEach(e => console.log(e.name + ': ' + e.population));

console.log(cities);
console.log('-'.repeat(50));

[...cities].sort((a, b) => b.population - a.population)
    .filter(e => e.population < 1000000)
    .forEach(e => console.log(e.name + ': ' + e.population));

console.log(cities);

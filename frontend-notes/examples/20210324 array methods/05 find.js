const arr = [
    { name: 'Den', weight: 70, iq: 130 },
    { name: 'Andrew', weight: 60, iq: 120 },
    { name: 'Korepanych', weight: 135, iq: -200 },
];

// let dude = arr.find(el => el.name === 'Korepanych');
// console.log(dude);

let smarts = arr.find(el => el.iq > 100); // Найдёт первого
console.log(smarts);

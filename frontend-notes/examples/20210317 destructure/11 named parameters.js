// Функции: именованные параметры и значения по умолчанию
function print_person_bad(name, profession, age, weight) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log(weight);
    console.log('-----------');
}

print_person_bad('Smith', 'Baker', 50, 60);

function print_person_good({ name, profession, age, weight }) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log(weight);
    console.log('-----------');
}

print_person_good({ name: 'Smith', profession: 'Baker', age: 50, weight: 60 });
print_person_good({ name: 'Smith', age: 50, profession: 'Baker', weight: 60 });

function print_person_very_good({ name, profession = 'Programmer', age = 18, weight }) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log(weight);
    console.log('-----------');
}

print_person_very_good({ name: 'Smith', age: 50, weight: 60 });

// Деструктуризация вложенных объектов (можно и для массивов)
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }) {
    console.log(`Hello, ${name}`);
    console.log(`Your Maths score is ${maths}`);
    console.log(`Your English score is ${english}`);
    console.log(`Your Science score is ${science}`);
}

displaySummary(student);

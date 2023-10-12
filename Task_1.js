function displayOwnProperties(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${obj[key]}`);
        }
    }
}

// Пример использования функции
const person = {
    name: "John",
    age: 30,
    job: "Engineer"
};

displayOwnProperties(person);

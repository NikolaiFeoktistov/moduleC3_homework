function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

// Пример использования функции:
const sampleObject = { name: "John", age: 30, city: "New York" };
const propertyName = "age";

const hasAgeProperty = hasProperty(sampleObject, propertyName);
console.log(`Object has ${propertyName} property: ${hasAgeProperty}`); // Выводит "Object has age property: true"

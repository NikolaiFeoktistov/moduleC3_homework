function createEmptyObjectWithoutPrototype() {
    return Object.create(null);
}

// Пример использования функции
const emptyObject = createEmptyObjectWithoutPrototype();

console.log(emptyObject); // Выведет: {}
console.log(emptyObject.toString); // Выведет: undefined

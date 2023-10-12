//Консольное приложение, которое моделирует иерархию электроприборов с использованием прототипов.
//Создадим два типа электроприборов: настольная лампа и компьютер.
//Каждый из них будет иметь свойства, такие как мощность и состояние (включен или выключен).

// Прототип для электроприбора
function ElectricAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
}

// Метод для включения электроприбора
ElectricAppliance.prototype.turnOn = function () {
    this.isOn = true;
    console.log(this.name + " включен.");
};

// Метод для выключения электроприбора
ElectricAppliance.prototype.turnOff = function () {
    this.isOn = false;
    console.log(this.name + " выключен.");
};

// Настольная лампа
function DeskLamp(power) {
    ElectricAppliance.call(this, "Настольная лампа", power);
}

DeskLamp.prototype = Object.create(ElectricAppliance.prototype);

// Компьютер
function Computer(power) {
    ElectricAppliance.call(this, "Компьютер", power);
}

Computer.prototype = Object.create(ElectricAppliance.prototype);

// Создание экземпляров электроприборов
const deskLamp = new DeskLamp(40);
const computer = new Computer(300);

// Включение и выключение электроприборов
deskLamp.turnOn();
computer.turnOn();
computer.turnOff();

// Функция для подсчета потребляемой мощности
function calculateTotalPower(appliances) {
    let totalPower = 0;
    for (const appliance of appliances) {
        if (appliance.isOn) {
            totalPower += appliance.power;
        }
    }
    return totalPower;
}

// Создание массива с подключенными приборами
const appliances = [deskLamp, computer];

// Вывод потребляемой мощности
const totalPower = calculateTotalPower(appliances);
console.log("Потребляемая мощность: " + totalPower + " Вт");

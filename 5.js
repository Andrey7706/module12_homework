// Задание 5.

/*
Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:
Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/

let result = [];

class ElectricDevice {
    constructor() {
        this.voltage = '220V',
        this.getIncludes = function (include) {
            if(include === true) {
                console.log(`Прибор ${this.name} включен в розетку, его мощность ${this.power} W`);
            } else {
                console.log(`Прибор ${this.name} отключен`);
            }
            if (include === true) {
                return result.push(this.power);
            }
        }
    }
}

class Device_1 extends ElectricDevice {
    constructor(name, memory, power) {
        super(name);
        this.name = name,
        this.memory = memory,
        this.power = power
    }
}

class Device_2 extends ElectricDevice {
    constructor(name, volume, power) {
        super(name);
        this.name = name,
        this.volume = volume,
        this.power = power
    }
}

class Device_3 extends ElectricDevice {
    constructor(name, light, power) {
        super(name);
        this.name = name,
        this.light = light,
        this.power = power
    }
}

const computer = new Device_1('Asus', '1 Tb', 150);
const kettle = new Device_2('Bosch', '3 litr', 1600);
const lamp = new Device_3('Xiaomi', '4000 lm', 20);

computer.getIncludes(true);
kettle.getIncludes(false);
lamp.getIncludes(true);

function sumPower(result) {
    var sum = 0;
    for(var i = 0; i < result.length; i++){
        sum += result[i];
        }
    console.log(`Сумма мощности включенных электроприборов ${sum} W`);
}

sumPower(result);
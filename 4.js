// Задание 4.

/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, 
какими свойствами он обладает.

План:
Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :)

Общие требования:
Имена функций, свойств и методов должны быть информативными
Соблюдать best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и т.д.
*/

let result = [];

function ElectricDevice() {
    this.type = 'electric',
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

Device_1.prototype = new ElectricDevice();
Device_2.prototype = new ElectricDevice();
Device_3.prototype = new ElectricDevice();

function Device_1(name, memory, power) {
    this.name = name,
    this.memory = memory,
    this.power = power
}

function Device_2(name, volume, power) {
    this.name = name,
    this.volume = volume,
    this.power = power
}

function Device_3(name, light, power) {
    this.name = name,
    this.light = light,
    this.power = power
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

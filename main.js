// Реалізуйте клас Worker(Працівник), який буде мати такі властивості:
// firstName(ім'я), secondName (прізвище), rate(ставка за день роботи),
// days(кількість відпрацьованих днів). Також клас повинен мати метод getSalary(),
// який буде виводити зарплату працівника. Зарплата - це множення ставки rate
// на кількість відпрацьованих днів days.

class Worker {
    constructor(firstName,secondName,rate,days) {
        this.firstName=firstName;
        this.secondName=secondName;
        this.rate=rate;
        this.days=days;
    }
    getSalary(){
        return this.rate*this.days
    }
}
const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.firstName)
console.log(worker.secondName)
console.log(worker.rate)
console.log(worker.days)
console.log(worker.getSalary())

// Реалізуйте клас MyString, який матиме наступні методи:
//  метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді,
// метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної
//  та метод ucWords(), який приймає рядок і робить капіталізації першої літери кожного слова цього рядка.
//  Використовує cучасний class.

class MyString {
    constructor(str) {
        this.str=str;
    }
    reverse(){
        return this.str.split("").reverse().join("");
    }
    ucFirst(){
        return this.str.toUpperCase()
    }
    ucWords(){
        return this.str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    }

}
const str = new MyString(`ivan ivan`);
console.log(str.reverse())
console.log(str.ucFirst())
console.log(str.ucWords())

// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off().
// Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина,
//  які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний.
// Використовує cучасний class.

class CoffeeMake {
    on(){
        console.log(`on`)
    }
    of(){
        console.log(`of`)
    }
}
class DripCoffeeMake extends CoffeeMake{
    espresso(){
        console.log(`espresso`)
    }
}
class CarobCoffeeMake extends CoffeeMake{
    latte(){
        console.log(`latte`)
    }
}
class CoffeeMachine extends CoffeeMake{
    americano(){
        console.log(`americano`)
    }
}

new DripCoffeeMake().espresso()
new  CarobCoffeeMake().latte()
new CoffeeMachine().americano()
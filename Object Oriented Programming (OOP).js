// Coding a Person class with methods
class Person {
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.energy = energy;
        this.age = age;
        this.name = name;
    }
    sleep() {
        this.energy += 20;
        console.log('The energy is increasing and is at:', this.energy)
    }
    doSomethingFun() {
        if (this.energy > 0) {
            this.energy -= 10;
            console.log('The energy is going down and is at:', this.energy)
        } else if (this.energy == 0) {
            this.sleep();
        }
    }
}

// Coding a Worker class that inherites properties from the Person super class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10
        console.log("You are gaining experience and it`s` at:", this.xp)
    }
}
// Coding an intern object to instantiate the Worker class
function intern() {
    var work = new Worker('bob', 21, 110, 0, 10);
    work.goToWork()
    return work;
}
intern()

// Coding a manager object to instantiate the Worker class
function manager() {
    var fun = new Worker('Alice', 30, 120, 100, 30)
    fun.doSomethingFun()
    return fun;
}
manager()
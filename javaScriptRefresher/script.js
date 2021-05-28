/////////////////////////////
// Classes
class Human {
    constructor() {
        this.gender = 'Male';
    }

    personGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super(); // used to inherite a constructor of parent class
        this.name = 'kaushal';
        this.gender = 'female   '
    }

    personName() {
        console.log(this.name);
    }
}

const person = new Person();
person.personName();
person.personGender();

//////////////////////////
// es7 next generation properties

/* constructor() {
    this.gender = 'Male';
}
is replaced by

gender = 'Male'

and

personName() {
    ..............;
}

is replaced by 

personName = () => {..........}

 */

////////////////////////////
// Spread and Rest Operators
// ...

/* const newArray = [...oldArray, 1, 2]
const newobject = {...oldObject, newPro: 5} */
class profession {
    constructor(type, gender, person){
        this._type = type
        this._gender = gender
        this._person = person
    }

    sayName = function() {
        console.log(type + this._person)
    }
}

let someOne = new human("teacher", "female", "biology")

let anotherOne = new human("doctor", "male", "sth")


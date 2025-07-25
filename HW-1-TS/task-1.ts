// XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// @ts-ignore
class User {

    constructor(
        private _id: number,
        private _name: string,
        private _surname: string,
        private _phone: string) {}


    get id(): number {
        return this._id;
    }


    set id(value: number) {
        this._id = value;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }


    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

// id: number;
//     name: string;
//     surname: string;
//     phone: string;
//
//     constructor(id: number, name: string, surname: string, phone: string) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.phone = phone;
//     }
}



// @ts-ignore
let users: User[] = [
    new User(1, 'kokos', 'asdqwe', '+964657983'),
    new User(2, 'kokos', 'asdqwe', '+964657983'),
    new User(3, 'kokos', 'asdqwe', '+964657983'),
    new User(4, 'kokos', 'asdqwe', '+964657983'),
    new User(5, 'kokos', 'asdqwe', '+964657983'),
    new User(6, 'kokos', 'asdqwe', '+964657983'),
    new User(7, 'kokos', 'asdqwe', '+964657983')
];
console.log("Усі користувачі:");
console.log(users);


const evenIdUsers = users.filter(user => user.id % 2 === 0);

console.log("Користувачі з парним id:");
console.log(evenIdUsers);


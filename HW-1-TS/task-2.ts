

class User {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public phone: string
    ) {}
}


//2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання (XjJuucOMR0), та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let users = [
    new User(1, 'kokos', 'asdqwe', '+964657983'),
    new User(2, 'kokos', 'asdqwe', '+964657983'),
    new User(3, 'kokos', 'asdqwe', '+964657983'),
    new User(4, 'kokos', 'asdqwe', '+964657983'),
    new User(5, 'kokos', 'asdqwe', '+964657983'),
    new User(6, 'kokos', 'asdqwe', '+964657983'),
    new User(7, 'kokos', 'asdqwe', '+964657983'),
    new User(8, 'kokos', 'asdqwe', '+964657983'),
    new User(9, 'kokos', 'asdqwe', '+964657983'),
    new User(10, 'kokos', 'asdqwe', '+964657983'),
    new User(321, 'asdasd', 'qweqwe', '+.65464654654')
];


const evenIdUsers: User[] = users.filter(user => user.id % 2 === 0);
console.log('Парні користувачі')
console.log(evenIdUsers);


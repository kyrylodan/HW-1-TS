
type User7 = {id: number, name:string, surname:string, phone:string}

let users73: User7[] = [
    {id: 8, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 2, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 10, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 4, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 5, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 6, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 1, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 7, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 9, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 3, name: 'kokos', surname: 'asdqwe', phone: '+964657983'},
    {id: 321, name: 'asdasd', surname: 'qweqwe', phone: '+.65464654654'}
];


console.log(users73.sort((user1, user2) => user1.id - user2.id));


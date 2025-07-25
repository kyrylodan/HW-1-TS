interface Array<T> {
    myFilter(callback: (value: T) => boolean): T[];
}

Array.prototype.myFilter = function <T>(predicate: (value: T) => boolean): T[] {
    const arr: T[] = [];
    const array = this as T[];

    for (const item of array) {
        if (predicate(item)) {
            arr.push(item);
        }
    }

    return arr;
};

type User79 = { name: string; age: number; status: boolean };

let usersXXX: User79[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const result = usersXXX.myFilter(user => user.status);

console.log(result);



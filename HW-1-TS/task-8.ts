
        // zg6Fifnqig
        // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
        // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
        //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
        //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

        class Cinderella {

         name: string;
         age: number;
         footSize: number;

            constructor(name:string, age:number, footSize:number) {
                this.name = name;
                this.age = age;
                this.footSize = footSize;
            }
        }

class Prince {

    name: string;
    age: number;
    slipper: number;
    wife?: Cinderella;

    constructor(name:string, age:number, slipper:number) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('asd1', 1231, 34),
    new Cinderella('asd2', 1232, 35),
    new Cinderella('asd3', 1233, 36),
    new Cinderella('asd4', 1234, 37),
    new Cinderella('asd5', 1235, 38),
    new Cinderella('asd6', 1236, 39),
];

const prince = new Prince('qweqwe', 123123, 36);


// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.slipper) {
//         prince.wife = cinderella;
//     }
// }

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);

prince.wife = cinderellaMain;
if(cinderellaMain) {
    console.log(cinderellaMain.age);
}



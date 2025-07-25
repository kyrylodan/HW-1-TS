class Car {
    mode: string;
    producer: string;
    year: number;
    maxSpeed: number;
    engineVolume: number;
    driver?: object;

    constructor(mode: string, producer: string, year: number, maxSpeed: number, engineVolume: number) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(speedToAdd: number) {
        if (speedToAdd > 0) {
            this.maxSpeed += speedToAdd;
        }
    }

    changeYear(newYear: number) {
        if (newYear > 1815) {
            this.year = newYear;
        }
    }

    addDriver(driver: object) {
        if (driver) {
            this.driver = driver;
        }
    }
}



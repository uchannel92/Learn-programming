//class definition.
class Cars {
    constructor(brand, model, year, doors, engineSize, fuelType) {
        console.log("New instance has been added to class Cars.")
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.doors = doors;
        this.engineSize = engineSize;
        this.fuelType = fuelType;
    }

}


let car1 = new Cars("Merceds", "A Class", 2015, 3, 2.0, "Diesel");
console.log(car1.model)



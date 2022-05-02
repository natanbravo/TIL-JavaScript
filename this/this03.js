//Constructor call;


function Car(brand){
    this.brand= brand;
}
const car = new Car ("Honda");
console.log(car.brand); //Output: Honda

//The "this" inside of the "car"object makes reference to the object;
//So, using a "." followed by some variable name (this.brand), automaticaly an atribute is created inside of the "car" object;
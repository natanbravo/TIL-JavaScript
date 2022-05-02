//Let's consider here the "usa Strict" mode;

" useStrict ";
const car = {
  brand: "Ford",
  getBrand: function () {
    return this.brand;
  },
};
console.log(car.getBrand());//Output: Ford

// Inside of the function "getBrand" =====> "this" makes reference to the "car" object;

// In the example below, we had an error;

const getBrand = car.getBrand;
console.log(getBrand());

//In this case "this" is undefined;
// Because this time it makes reference to tha variable getBrand and not to the "car" object anymore;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////



// To fix it, we can use the "bind()" method;

const getbrand = car.getBrand.bind(car);
console.log(getbrand()); // Output: Honda


//In this way , the "bind()" makes referenceto "car" object again;
///////////////////////////////////////////////////////////////////////////////
// FUNCTION CONSTRUCTOR ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// let israel = {
//     name        : 'Israel',
//     yearOfBirth : 1989,
//     job         : 'web content dev'
// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calcAge = () => {
//     //     console.log(2019 - this.yearOfBirth);
//     // };
// };  // No se puede hacer en Arrow Function, pierde la propiedad de ser un constructor de objetos. 

// Person.prototype.calcAge = function () { console.log(2019 - this.yearOfBirth);};
// Person.prototype.lastName = 'Smith';


// israel = new Person('Israel', 1989, 'Web Dev');
// let sebas = new Person('Sebastián', 1992, 'Veterinario');
// let esteban = new Person('Esteban', 1995, 'Administrador');



///////////////////////////////////////////////////////////////////////////////
// INHERITANCE ////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// israel.calcAge();
// sebas.calcAge(); // El objeto toma el método calcAge(); del prototipo constructor. 
// esteban.calcAge();

// console.log(israel.lastName);
// console.log(sebas.lastName);
// console.log(esteban.lastName);




///////////////////////////////////////////////////////////////////////////////
// object.create(); METHOD ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// let personProto = {
//     calcAge: function () {
//         console.log(2019 - this.yearOfBirth);
//     }
// };
// // Esto no es una Function Constructor, por eso no se usa letra capital al inicio,
// // pero lo que está creando es un objeto que va a actuar como prototype y luego se crea un 
// // objeto basado en ese prototipo.

// let newObject = Object.create(personProto);
// // Lo que hace esto es recibir como parámetro el objeto prototipo que se creó como base
// // para crear el newObject. 

// // Hay otra forma de crear objetos usando object.create(); asignando valores dentro del mismo método.
// let esreal = Object.create(personProto, {
//     name: { value: 'esreal'},
//     yearOfBirth: { value: 1989 },
//     job: { value: 'Web Content Dev' }
// });

// console.log(esreal);
// esreal.calcAge();




///////////////////////////////////////////////////////////////////////////////
// PRIMITIVES VS OBJECTS //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// // Primitives vs Objects
// var a = 12;
// var b = a;
// a = 24;
// console.log(a);
// console.log(b);
// // Las variables almacenan su propia copia de los datos, pero no hacen referencia a nada. (Primitives)

// var obj1 = {
//     name: 'Israel',
//     age: '30'
// };
// var obj2 = obj1;
// obj1.age = 25;
// console.log(obj1.age);
// console.log(obj2.age);
// // obj1 y obj2 son exactamente el mismo objeto. El Uno es la referencia del Dos.

// // Functions
// var age = 30;
// var obj = {
//     name: 'Israel',
//     city: 'San José'
// };

// function change (a, b) {
//     a = 35;
//     b.city = 'Barcelona';
// };

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// // Cuando pasamos un Primitive en una función se crea una copia y el original nunca se va a ver afectado, 
// // en cambio cuando pasamos un objeto, no pasamos el objeto realmente, 
// // en realidad es sólo una referencia del mismo.




///////////////////////////////////////////////////////////////////////////////
// FIRST CLASS FUNCTIONS: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// PASSING FUNCTIONS AS ARGUMENTS /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// let years = [1928, 1345, 1987, 1956, 2014];

// function arrayCalc(arr, fn){
//     let arrRes = [];
//     arr.forEach(element => {
//         arrRes.push(fn(element));
//     });
//     return arrRes;
// }

// function calcAge(yearOfBirth) {
//     return 2019 - yearOfBirth;
// }

// function isFullAge(age) {
//     return age >= 18;
// }

// function maxHeartRate(age) {
//     if (age >= 18 && age <= 81) {
//         return Math.round(206.9 - (0.67 * age));
//     } else {
//         return -1;
//     }
// }

// let ages = arrayCalc(years, calcAge);
// let fullAges = arrayCalc(ages, isFullAge);
// let rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// FUNCTIONS RETURNING FUNCTIONS //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


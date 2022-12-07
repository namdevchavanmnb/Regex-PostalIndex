console.log("Welcome to regex Postal Code")
let postalRegex =RegExp('^[0-9]{6}$');
let postalcheck =postalRegex.test("023434");
console.log(postalcheck);

let postalRegex1 =RegExp('^[A-Z]{1}[0-9]{6}$');
let postalcheck1 =postalRegex1.test("A023434");
console.log(postalcheck1);

let postalRegex3 =RegExp('^[0-9]{6}[A-Z]{1}$');
let postalcheck2 =postalRegex3.test("023434A");
console.log(postalcheck2);
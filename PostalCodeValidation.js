console.log("Welcome to regex Postal Code")
let postalRegex =RegExp('^[0-9]{6}$');
let postalcheck =postalRegex.test("023434");
console.log(postalcheck);

let postalRegex1 =RegExp('^[A-Z]{1}[0-9]{6}$');
let postalcheck1 =postalRegex1.test("A023434");
console.log(postalcheck)
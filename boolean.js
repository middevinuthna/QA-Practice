let isLoggedIn = true;
let isAdmin = false;

console.log(typeof isLoggedIn); // boolean
console.log(typeof isAdmin);    // boolean

if (isLoggedIn) {
  console.log("Welcome user!");
} else {
  console.log("Please log in.");
}

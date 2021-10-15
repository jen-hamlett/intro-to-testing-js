// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// sayHello function
function sayHello(name) {
    return "Hello " + name;
}
function itsFive(input) {
    input = parseInt(input);
    return (input == 5);

}
function isEven(input) {
    if (parseFloat(input) && input != Infinity) return !(input % 2);
    else return false;
}

function isVowel(input) {

    if (input === "" || (typeof input != "string")) {
        return false;
    }
    input = input.toLowerCase();

    return ((input.length == 1) && (input === "a" || input === ("e")
        || input === ("i") || input ===("O") || input ===("u") || input === ("y") ));

}
function add(num1, num2) {

    if ((typeof num1 && typeof num2) != 'number') return NaN;
    else return (num1 + num2);


}
console.log(add() + " nothing")
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for (var _i = 0, greeters_1 = greeters; _i < greeters_1.length; _i++) {
    var greeter = greeters_1[_i];
    alert(greeter.greet());
}
for (var greeter in greeters) {
    console.log(greeter);
}
for (var _a = 0, greeters_2 = greeters; _a < greeters_2.length; _a++) {
    var greeter = greeters_2[_a];
    console.log(greeter.greet());
}

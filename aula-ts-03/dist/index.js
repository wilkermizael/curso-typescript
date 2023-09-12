function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(1, 3);
//console.log(result);
function fullName(firstName, lastName) {
    var full = "".concat(firstName, " ").concat(lastName);
    var Days;
    (function (Days) {
        Days[Days["segunda"] = 1] = "segunda";
        Days[Days["ter\u00E7a"] = 2] = "ter\u00E7a";
    })(Days || (Days = {}));
    return Days;
}
var Days;
(function (Days) {
    Days[Days["segunda"] = 1] = "segunda";
    Days[Days["ter\u00E7a"] = 2] = "ter\u00E7a";
})(Days || (Days = {}));
var result2 = fullName("Wilker", "Mizael");
console.log(result2);

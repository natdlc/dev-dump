console.log("hello ts");
//implicit
var helloWorld = "hello world";
//explicit
var firstName = "John";
var age = 30;
var x = ["hello", 10];
//enums
var Cities;
(function (Cities) {
    Cities[Cities["Makati"] = 0] = "Makati";
    Cities[Cities["QC"] = 1] = "QC";
    Cities[Cities["Mandaluyong"] = 2] = "Mandaluyong";
    Cities[Cities["Pasig"] = 3] = "Pasig";
    Cities[Cities["TMC"] = 4] = "TMC";
})(Cities || (Cities = {}));
//usage
var region = Cities.Pasig;
console.log(region);

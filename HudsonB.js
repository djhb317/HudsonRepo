alert("Let's Buy A Super Car!");

//say funcion
var say = function(message) {console.log(message)}
;

var car=function(carName){
    if (carName === ["Mercedes",
    "Ferrari",
    "Maserati"]){
        say("nice car");
        return true; 
    }else{
        say("don't buy");
        return false; 
    };    
};
// miles function

var milesPerCar = [15000, 18000, 12000]
;
for (var milage = 0; milage <= milesPerCar.length; milage+=1000){
    var currentCarMilage = milesPerCar[milage],
    milesPerCar = milage}
;

if (milesPerCar <= 16000){
    say ("buy now!")}  
    else{
    say("Don't Buy")
};


function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var result = kilometerToMeter(7);
console.log(result);


function budgetCalculator(watch, phone, laptop){
    var total = watch*50 + phone*100 + laptop*500;
    return total;
}
var sum = budgetCalculator(4, 3, 2);
console.log(sum);



function hotelCost(day){
    var cost = 0;
    if (day <= 10){
        cost = day * 100;
    } else if (day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    } else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var count = hotelCost(35);
console.log(count);


function megaFriend(names){
    var max = names[0];
    for(var i = 0; i < names.length; i++){
        var element = names[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}
var names = ['fahi', 'niha', 'nisha', 'shanjida'];
var result = megaFriend(names);
console.log(result);

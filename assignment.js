

//1st: kilometer to meter
function kilometerToMeter(n){
    var result = n * 1000;
    if(result>=1){
        return result;
    }
    else{
        return 'Error';
    }
}

// var meter = kilometerToMeter(5.21);
// console.log('Meter:',meter);

//2nd: gori,phone,laptop
function budgetCalculator(gori,phone,laptop){
    var goriPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalGori = gori * 50;
    var totalPhone = phone * 100;
    var totalLaptop = laptop * 500;
    var totalPrice = totalGori + totalPhone + totalLaptop;
    if(totalPrice>=0){
        return totalPrice;
    }
    else{
        return 'Error';
    }
    
}
// var quantity = budgetCalculator(2,1,3);
// console.log('Total Price:',quantity);

//3rd: hotelcost
function hotelCost(days){
    var cost = 0;
    if(days <= 10){
       cost = days * 100;

    }
    else if(days <= 20){
        var first10Days = 10 * 100;
        var remaining = days - 10;
        var second10Days = remaining * 80;
        cost = first10Days + second10Days;
    }
    else{
        first10Days = 10 * 100;
        second10Days = 10 * 80;
        var remaining = days - 20;
        var nextDays = remaining * 50;
        cost = first10Days + second10Days + nextDays;
    }
    if(cost>=1){
        return cost;
    }
    else{
        return 'Error';
    }
}
var total = hotelCost(28);
console.log('Hotel Cost:',total);


//4th: find the largest string
function megaFriend(str){
    var lgth = 0;
    for(var i = 0; i<str.length; i++){
        // var longest = names[i];
        if(str[i].length>lgth){
            lgth = str[i].length;
            longest = str[i];
        }
    }
    return longest;
}
var namelist = ['Ashfak','Mahbuba','Mahia','Naif','Labib'];
var result = megaFriend(namelist);
console.log('Largest string:',result);
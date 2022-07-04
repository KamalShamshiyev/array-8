function calcTip(number) {
    if (number >= 50 && number <= 300){
        return number * 15 / 100
    } 
    if(number < 50 || number > 300){
        return number * 20 / 100
    }
}
const amount = [44, 555, 150]
console.log(calcTip(amount[0]))
console.log(calcTip(amount[1]))
console.log(calcTip(amount[2]))


//console.log(amount[0], amount[1], amount[2])

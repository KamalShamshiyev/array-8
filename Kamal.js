function calcTip(number) {
    if (number >= 50 && number <= 300){
        return number * 15 / 100
    } 
    if(number < 50 || number > 300){
        return number * 20 / 100
    }
}
const amount = [44, 555, 150]
let a = calcTip(amount[0])
let b = calcTip(amount[1])
let c = calcTip(amount[2])


const tips  = []

tips.push(a)
tips.push(b)
tips.push(c)
console.log(amount)
console.log(tips)
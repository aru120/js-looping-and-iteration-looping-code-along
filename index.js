// Code your solutions in this file
names = ["John","babe"]

function writeCards(arr, event){
    let newarr =[]
    for (let i = 0; i < arr.length; i++){
        newarr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return newarr
}


function countDown(){
    let num = 0
    while(num < 11){
        console.log(num)
        num++
    }
}
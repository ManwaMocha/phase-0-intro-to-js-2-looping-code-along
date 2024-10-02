// Code your solutions in this file


for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}



function writeCards(myArray,eventName){
    const newArray=[]
    for (let i=0;i<myArray.length;i++){
        const message= `Thank you, ${myArray[i]}, for the wonderful ${eventName} gift!`
         newArray.push(message)
    }
    return newArray
}

function countDown(number){
    let i=number
    while(i>=0){
        console.log(i)
        i--;
    }
    return i


}
countDown(10)
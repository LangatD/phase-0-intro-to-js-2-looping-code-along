// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
// while loop
function countDown(number){
    let i = 0;
    while ( number >= i){
        console.log(number--);
    }
}
countDown(10)
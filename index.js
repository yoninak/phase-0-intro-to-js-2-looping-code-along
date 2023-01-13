

function writeCards(arrayOfNames, wedding){
    let container = []
    for (let i = 0; i < arrayOfNames.length; i++){
       container.push( `Thank you, ${arrayOfNames[i]}, for the wonderful ${wedding} gift!`)
    }
     return container
}

function countDown(startingNumber){
    while (startingNumber >= 0){
        console.log(startingNumber) 
        startingNumber--
    }
}


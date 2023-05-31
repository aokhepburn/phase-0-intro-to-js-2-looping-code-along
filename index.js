function writeCards(name, eventName){
    let thankyouCards = []
    
    for (let i = 0; i < name.length; i++){
        thankyouCards.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    }
        
    return thankyouCards
}

function countDown(n){
    while(n >= 0){console.log(n--)}
    return
}



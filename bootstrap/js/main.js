var quotesList = [
    `“It's not what happens to you, but how you react to it that matters.”

    --Epictetus
    ` ,
    `“Do not take life too seriously. You will not get out alive.”

    --Elbert Hubbard
    ` ,
    `“You miss 100% of the shots you don't take.”

    --Wayne Gretzy
    ` ,
    `“Resentment is like drinking poison and waiting for your enemies to die.”

    --Nelson Mandela
    ` ,
    `“Be yourself; everyone else is already taken.”

    ― Oscar Wilde 
    ` ,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”

    ― Albert Einstein
    ` ,
    `“So many books, so little time.”

    ― Frank Zappa
    ` ,
    `“You only live once, but if you do it right, once is enough.”

    ― Mae West`

]

var displayedQuotes = [];

function showquotes(){
    if(displayedQuotes.length === quotesList.length){
        displayedQuotes = [];
    }

    var randomIndex = Math.trunc(Math.random() * quotesList.length);

    while(displayedQuotes.includes(randomIndex)){
        var randomIndex = Math.trunc(Math.random() * quotesList.length);
    }

    var randomQuote = quotesList[randomIndex];

    displayedQuotes.push(randomIndex);

    document.getElementById("printQuotes").innerHTML = randomQuote;

    
}

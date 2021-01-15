console.log("It's quizzing time...");

let activeQuestion = document.querySelector("#question");


async function sendFetch(){
    let response = await fetch("https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean");
    let data = await response.json();
    let question = data.results[0].question;
    //function to remove html special characters
    question = replaceChar(question);
    let answer = data.results[0].correct_answer;
    activeQuestion.innerText = question;
    console.log(data);
    console.log(question);
    console.log(answer);
}
sendFetch();

function replaceChar(string){
    return string
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

// Daily Quiz web page.

// get a list?? of questions from api and store in variable

// or just get one at a time.
// https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean
// ask a true / false quiz question


// get answer from user.
// ?? lose a star if not answered in time


// score answer on star score board.



// keep asking question until 5 has been scored


// don't ask duplicate questions


// when five stars, change difficulty


// list answered questions below with ?? fade out maybe


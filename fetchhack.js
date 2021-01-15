console.log("It's quizzing time...");

async function sendFetch(){
    let response = await fetch("https://opentdb.com/api.php?amount=2&category=11&difficulty=easy&type=boolean");
    let data = await response.json();
    let question = data.results[0].question;
    console.log(data);
    console.log(question);
}
sendFetch();

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


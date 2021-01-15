console.log("It's quizzing time...");

// variables
let score = 0
let globalAnswer;
let question;

// query selectors for HTML elements
let activeQuestion = document.querySelector("#question");
let buttonFalse = document.querySelector("#false");
let buttonTrue = document.querySelector("#true");
let ol = document.querySelector("#answered-questions");
let yourScore = document.querySelector("#score");
let p = document.querySelector("p");

// button event listeners
buttonFalse.addEventListener("click", handleClick);
buttonTrue.addEventListener("click", handleClick);
         

async function quizQuestions(){
    let response = await fetch("https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean");
    let data = await response.json();
    
    question = data.results[0].question;
    //function to remove html special characters
    question = replaceChar(question);
    
    //function to check for duplicate question
       
    globalAnswer = data?.results[0].correct_answer.toLowerCase();
    
    // displays question on page
    activeQuestion.innerText = question;
    
    console.log(data);
    console.log(question);
    console.log(globalAnswer);

    //return globalAnswer;
}

function replaceChar(string){
    return string
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function handleClick(event){
    console.log(event.target.id + "target given");
    console.log(globalAnswer);
    console.log(typeof event.target.id);
    console.log(typeof globalAnswer);
    //if answer true and question true 
    if (globalAnswer == event.target.id){
        //increase score
        score ++;
    //}else if (globalAnswer != event.target.id){ 
    //    score = score - 1;
    }else{
        if (score != 0){
            score --;
        }
    }
    addScore(score);
    console.log(`Score is ${score}`);
    //call move current question to list
    console.log(question);
    createQuestionList(question);
    //call new question   
    quizQuestions();
}

function addScore(num){
    
    let emoji = "&#11088";

    yourScore.innerText = `Your score = ${num}`;
    // p.innerText = `${emoji}`;

    

}

//create a fuction that creates a new list item
function createQuestionList(question){
    let li = document.createElement("li");
    li.innerText = question;
    console.log(question);
    ol.appendChild(li);
    
}

function questionsInList(questionIn){
    //questions are in li elements, collect them all!
    let listLi = document.querySelectorAll("li");
    // itterate over the list of li elements.
    for (let i = 0; i < listLi.length; i++){
        console.log(questionIn);
        console.log(listLi[i].innerText);
        //find repeated questions
        if (questionIn === listLi[i].innerText){
            console.log("WHY!!");
            return false;
        }
    }
    // if no matches are found return true
    return true
}

// Start Code

quizQuestions();

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


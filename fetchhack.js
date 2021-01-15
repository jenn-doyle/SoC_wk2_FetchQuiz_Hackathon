console.log("It's quizzing time...");

// variables
let score = 0

// query selectors for HTML elements
let activeQuestion = document.querySelector("#question");
let buttonFalse = document.querySelector("#false");
let buttonTrue = document.querySelector("#true");
let ol = document.querySelector("#answered questions");

// button event listeners
buttonFalse.addEventListener("click", handleClick);
buttonTrue.addEventListener("click", handleClick);

function handleClick(event){
    
    console.log(event.target.id);
    console.log(globalAnswer);
    //if answer true and question true 
    if (true === true || false === false){
    //if (globalAnswer === event.target.id){
        //increase score
        score ++;
    //}else if (globalAnswer != event.target.id){ 
    //    score = score - 1;
    }else{
        score --;
    }
    console.log(`Score is ${score}`);

    //call move current question to list
    answeredQuestions();
    //call new question   
    quizQuestions();
}
        
function answeredQuestions(){

}  
    

async function quizQuestions(){
    let response = await fetch("https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean");
    let data = await response.json();
    
    let question = data.results[0].question;
    //function to remove html special characters
    question = replaceChar(question);
    
    let answer = data.results[0].correct_answer.toLowerCase();
    
    // displays question on page
    activeQuestion.innerText = question;
    
    console.log(data);
    console.log(question);
    console.log(answer);

    return answer;
}

// Start Code
let globalAnswer = quizQuestions();

function replaceChar(string){
    return string
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}


//create a fuction that creates a new list item
    /*function createQuestionList(question){
    let li = document.createElement("li");
    li.innerText = question;
    ol.appendChild(li);
}



function questionsInList(questionIn){
    
    //quotes are in li elements, collect them all!
    let listLi = document.querySelectorAll("li");
    
    // itterate over the list of li elements.
    for (let i = 0; i < listLi.length; i++){
        
        console.log(questionIn);
        console.log(listLi[i].innerText);
        //find repeated quotes
        if (questionIn === listLi[i].innerText){
            console.log("WHY!!");
            return false;
        }
    }
    // if no matches are found return true
    return true
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


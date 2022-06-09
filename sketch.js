// multi player (2) quiz game, Qs are fetched from the db, 6 categories r fixed, number of qs is dynamic
var form, question, contestant, quiz; // objects for the game
var gameState = 0;
var contestantCount, allContestants, database;
var categories = []; // get from db
var quizDone = false; // set to true when all questions r answered
var qAnswered = []; // tracks q answered so its not shown again when shifting categories
var totalQuestions=0; 
var catIndex = 0, catSelected = "";
var qbank=[], ansbank=[];
var curQNo = 0;

function setup(){
  //canvas = createCanvas(displayWidth, displayHeight);
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
  
}


function draw(){

  background("pink");
 
  //if (contestant!==undefined) text("Score :"+contestant.score, width-100, height-50);

  if (quiz.questions!== null) qbank = quiz.questions[catSelected];
  if (quiz.answers!== null) ansbank = quiz.answers[catSelected];

  if(contestantCount === 2){
    quiz.update(1);
    
  }

  if(gameState === 1){
    clear();
    background("pink");
    textSize(30);
    text("Score :"+contestant.score, width-200, height-100);
    quiz.ask();

    // check if all questions are done
    var numtrues = 0
    for (var j = 0; j < categories.length; j++){
      for (var i = 0; i < qAnswered[categories[j]].length; i++){
        if (qAnswered[categories[j]][i]==true) numtrues++;
      }
    }
    
    if (numtrues == totalQuestions) quizDone = true;
  }
  
  
  if(quizDone){ 
    clear();
    quiz.results();
  }
}

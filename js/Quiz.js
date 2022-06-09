class Quiz {
  constructor(){
    this.questions = null;
    this.answers = null;
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      // get the questions and answers from the database
      var questionsRef = await database.ref("questions").once("value");
      if (questionsRef.exists())
        this.questions = questionsRef.val();

      var answersRef = await database.ref("answers").once("value");
      if (answersRef.exists())
        this.answers = answersRef.val();

      // get the category names from the db into an array and set the all the qAnswered to false
      for (var i in this.questions) {
        categories.push(i);
        //console.log("questions in each cat : " + i + ":" + this.questions[i].length)
        qAnswered[i]=[];
        for (var j = 0 ; j < this.questions[i].length; j++){
          qAnswered[i].push(false);
          totalQuestions++;
        }
      }
      // set the first category as the defaukt
      catSelected = categories[0];

      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
  //    question.display();
      form = new Form();
      form.display();
    }
  }

  ask() {
    form.hide();
    question.display();

  }

  results(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("Results of the Quiz Contest:",130,230); 

      for(var plr in allContestants){
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].score, 250,display_Answers)
      }
    }
  }
}

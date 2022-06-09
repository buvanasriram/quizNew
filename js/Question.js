class Question {

  constructor() {
    this.title = createElement('h1');

    this.input2 = createInput("").attribute("id", "input2"); //BS
    this.input2.attribute("placeholder", "Enter your answer here");
    // todo-this.input2.attribute("text-transform", "uppercase")
    
    this.question = createElement('h3');
    
    this.submitbutton = createButton('Submit');
    this.skipButton = createButton("SKIP")

    this.cat1 = createButton(categories[0]);
    this.cat2 = createButton(categories[1]);
    this.cat3 = createButton(categories[2]);
    this.cat4 = createButton(categories[3]);
    this.cat5 = createButton(categories[4]);
    this.cat6 = createButton(categories[5]);
 /*   
    this.skipButton.hide();
    this.submitbutton.hide();
    this.input2.hide();
    this.cat1.hide();
    this.cat2.hide();*/
  }

  hide(){
    this.title.hide();
    this.input2.hide();
    this.question.hide();

    this.submitbutton.hide();
    this.skipButton.hide();
    this.cat1.hide();
    this.cat2.hide();
    this.cat3.hide();
    this.cat4.hide();
    this.cat5.hide();
    this.cat6.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(width/2, 0);

    this.cat1.position(50,50);
    this.cat2.position(50,80);
    this.cat3.position(50,110);
    this.cat4.position(50,140);
    this.cat5.position(50,170);
    this.cat6.position(50,200);
    
    // skip the question if already answered
    if (qAnswered[catSelected][curQNo]){
      if (curQNo < qbank.length-1) curQNo++;
      else {
        catIndex++;
        if (catIndex >= categories.length) catIndex = 0;
        catSelected = categories[catIndex];
        curQNo = 0;
      }
    }

    //console.log("q and cat : " + curQNo + ","+catSelected)
    this.question.html(qbank[curQNo] );
    this.question.position(width/2, 80);
    
   // this.cat1.show();
   // this.cat2.show();
    //BS this.input1.position(150, 230);
    //this.input2.show();
    //this.submitbutton.show();
    
    this.input2.position(width/2, height-200);
    
    this.submitbutton.position(width/2+50, height-100);
    //this.skipButton.show();
    this.skipButton.position(width/2-50,height-100)

    this.submitbutton.mousePressed(()=>{
     //BS this.title.hide();
     //BS this.input1.hide();
      //BS this.input2.hide();
      //BS this.submitbutton.hide();
      //BS contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
  
      if (contestant.answer===ansbank[curQNo]) {
        contestant.score++ ;
        
      }
      qAnswered[catSelected][curQNo]=true;
      document.getElementById("input2").value="";
      contestant.updateScore(); 
      if (curQNo < qbank.length-1) curQNo++;
      else {
        catIndex++;
        if (catIndex >= categories.length) catIndex = 0;
        catSelected = categories[catIndex];
        curQNo = 0;
      }
    });

    this.skipButton.mousePressed(()=>{
      if (curQNo < qbank.length-1) curQNo++;
      else {
        catIndex++;
        if (catIndex >= categories.length) catIndex = 0;
        catSelected = categories[catIndex];
        curQNo = 0;
      }
    })
    this.cat1.mousePressed(()=>{
      catIndex = 0;
      catSelected = categories[catIndex];
      curQNo = 0;
    });

    this.cat2.mousePressed(()=>{
      catIndex = 1;
      catSelected = categories[catIndex];
      curQNo = 0;
    });
    this.cat3.mousePressed(()=>{
      catIndex = 2;
      catSelected = categories[catIndex];
      curQNo = 0;
    });
    this.cat4.mousePressed(()=>{
      catIndex = 3;
      catSelected = categories[catIndex];
      curQNo = 0;
    });
    this.cat5.mousePressed(()=>{
      catIndex = 4;
      catSelected = categories[catIndex];
      curQNo = 0;
    });
    this.cat6.mousePressed(()=>{
      catIndex = 5;
      catSelected = categories[catIndex];
      curQNo = 0;
    });
  }
}

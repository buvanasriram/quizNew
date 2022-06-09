class Form {

    constructor() {
       this.name = createInput("").attribute("placeholder", "Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
  
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.name.hide();
      this.title.hide();
    }
    
    display(){
      this.title.html("My Quiz game");
      this.title.position(width/2 - 50, 0);
  
      this.name.position(width/2 - 40 , height/2 - 80);
      this.button.position(width/2 + 30, height/2);
      this.reset.position(width-100,20);
  
      this.button.mousePressed(()=>{
        this.name.hide();
        this.button.hide();
        contestant.name = this.name.value();
        contestantCount+=1;
        contestant.index = contestantCount;
    
        contestant.update();
        contestant.updateCount(contestantCount);
        this.greeting.html("Hello " + contestant.name)
        this.greeting.position(width/2 - 70, height/4);
      });
      
      this.reset.mousePressed(()=>{
      
      database.ref("/").update({
        contestants: null,
        gameState: 0,
        contestantCount:0
      });});
    }
  }
  
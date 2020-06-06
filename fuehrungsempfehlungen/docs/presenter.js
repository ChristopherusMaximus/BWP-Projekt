import { StartView } from "./startview.js";
import { Model } from "./model.js";
import { QuestionView } from "./questionview.js";
import { ResultView } from "./resultview.js";

export class Presenter{
    constructor(){
        this._init();     
    }

    //Button handlers----------------------
    //Start Test
    handleStartButtonClick(){
        this.loadQuestionView();
    }

    //Yes button
    handleYesButtonClick(){
        this.model.answeredWithYes();
        
    }

    //No Button
    handleNoButtonClick(){
        this.model.answeredWithNo();
        
    }

    //Start again
    handleNewRoundButtonClick(){
       this._init();
    }

    //------------------------------

    //creates result view
    showResult(resultArrayText){
        this.view = new ResultView(this, resultArrayText);
    }

    //creates a new question view with the new question
    loadQuestionView(){
        this.view = new QuestionView(this,this.model.getQuestion());
    }

    _init(){
        this.view = new StartView(this);
        this.model = new Model(this);
    }
}
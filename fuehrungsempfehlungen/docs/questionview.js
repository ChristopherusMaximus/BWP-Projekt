import { Presenter } from "./presenter.js";

export class QuestionView{
    constructor(presenter, question){
        this.presenter = presenter;
        this.question = question;
        this.generateView();
        this._addEventListener();
    }

    generateView(){
        //laod app div and reset it
        this.main = document.getElementById('app');
        this.main.innerHTML = '';

        //h6 Question------------------------
        const h6= document.createElement('h6');
        const questionText = document.createTextNode(this.question);
        h6.appendChild(questionText);
        this.main.appendChild(h6);
        //--------------------------------------

        //Yes Button----------------------------
        this.buttonYes = document.createElement('button');
        this.buttonYes.setAttribute("class", "btn btn-primary mx-1")
        const yesText = document.createTextNode('Ja');
        this.buttonYes.appendChild(yesText);
        this.main.appendChild(this.buttonYes);
        //--------------------------------------

        //No Button-------------------------------
        this.buttonNo = document.createElement('button');
        this.buttonNo.setAttribute("class", "btn btn-primary mx-1")
        const NoText = document.createTextNode('Nein');
        this.buttonNo.appendChild(NoText);       
        this.main.appendChild(this.buttonNo);
        //-----------------------------------------
    }

    //EventListener for the yes and no buttons
    _addEventListener(){
        this.buttonYes.addEventListener('click', () => {
            this.presenter.handleYesButtonClick();
        })

        this.buttonNo.addEventListener('click', () => {
            this.presenter.handleNoButtonClick();
        })
    }


}
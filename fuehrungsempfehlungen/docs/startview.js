import { Presenter } from "./presenter.js";

export class StartView{

    constructor(presenter){
        this.presenter = presenter;
        this.generateView();
        this._addEventListener();
    }

    generateView(){
        //load app div and reset it
        this.main = document.getElementById('app');
        this.main.innerHTML = '';

        const pErklärung = document.createElement('p');
        const pErklärungText = document.createTextNode("Im Nachfolgendem Test werden Ihnen nacheinander Fragen gestellt. Beantworten Sie diese entweder "+
        "mit Ja oder Nein. Am Ende des Tests bekommen Sie eine Empfehlung, wie Sie in der jeweiligen Situation"+
        " als Vorgesetzter handeln sollten.");
        pErklärung.append(pErklärungText);
        this.main.append(pErklärung);

        //Start Button --------------------
        this.startButton = document.createElement("button");
        this.startButton.setAttribute("class","btn btn-primary")
        const startButtonText = document.createTextNode('Start');
        this.startButton.appendChild(startButtonText);
        this.main.appendChild(this.startButton);
        //---------------------------------
    }

    //EventListener für Start Button
    _addEventListener(){
        this.startButton.addEventListener('click', () => {
            this.presenter.handleStartButtonClick();
        })
    }

}
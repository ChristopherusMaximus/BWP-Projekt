import { Presenter } from "./presenter.js";
import { baum } from "./baumstruktur.js";
import { fragen } from "./fragen.js";
import { ergebnis } from "./ergebnis.js";

export class Model {
    constructor(presenter) {
        this.presenter = presenter;
        this.loadBaum(0);
    }


    //loads a new treeentry and sets the point number for answer yes and no
    loadBaum(pos) {
        this.loadQuestionText(baum[pos].frage);
        this.yes = baum[pos].ja;
        this.no = baum[pos].nein;

        /* DEBUG
        console.log("fragenText: " + this.question);
        console.log("yes: " + this.yes);
        console.log("no: " + this.no);
        */
    }
 
    //loads the questiontext 
    loadQuestionText(pos) {
        this.question = fragen[pos];

        /* DEBUG
        console.log("fragenPos: " + pos);
        */
    }

    //if button yes get clicked -> check if this.yes is an array -> result; else load new treeentry
    answeredWithYes() {
        if (Array.isArray(this.yes)) {
            this.presenter.showResult(this.createResultArray(this.yes));
        } else {
            this.loadBaum(this.yes);
            this.presenter.loadQuestionView();
        }

    }

    //if button no get clicked -> check if this.no is an array -> result; else load new treeentry
    answeredWithNo() {
        if (Array.isArray(this.no)) {
            this.presenter.showResult(this.createResultArray(this.no));
        } else {
            this.loadBaum(this.no);
            this.presenter.loadQuestionView();
        }
    }

    //returns the actual question Text
    getQuestion() {
        return this.question;
    }

    //creates an result Array full of all answer textes
    createResultArray(array) {
        const returnArray = [];
        array.forEach(element => {
            returnArray.push(ergebnis[element]);
        });

        return returnArray;
    }



}
import { Presenter } from "./presenter.js";
import { ergebnis } from "./ergebnis.js";

export class ResultView{
    constructor(presenter, resultArray){
        this.presenter = presenter;
        this.resultArray = resultArray;
        this.generateView();
        this._addEventListener();
    }
 
    generateView(){
        this.main = document.getElementById('app');
        this.main.innerHTML = "";
        this.generatePreView();

        
        this.newRoundButton = document.createElement('button');
        this.newRoundButton.setAttribute("class", "btn btn-lg btn-success m-3");
        this.newRoundButton.innerHTML= '<i class="fa fa-repeat"></i>';
        //const buttonText = document.createTextNode('Nochmal');
        //this.newRoundButton.appendChild(buttonText);
        this.main.appendChild(this.newRoundButton);

        this.goToStartPageButton = document.createElement('button');
        this.goToStartPageButton.setAttribute("class", "btn btn-lg btn-primary m-3");
        this.goToStartPageButton.innerHTML= '<i class="fa fa-home"></i>';
        // const buttonStartText = document.createTextNode('Zur Übersicht zurück');
        // this.goToStartPageButton.appendChild(buttonStartText);
        this.main.appendChild(this.goToStartPageButton);
        
    }

    _addEventListener(){
        this.newRoundButton.addEventListener('click', () => {
            this.presenter.handleNewRoundButtonClick();
        })

        this.goToStartPageButton.addEventListener('click', ()=>{
            window.location = '../../index.html';
        })
   }        
    generatePreView(){
        if(this.resultArray.length > 1){
            this.generateResult();
        }else{
            this.generateSingleResult();
        }
    }
    generateResult(){
        this.main.innerHTML = ' <label id="ultra">'
        +'Für Sie sind mehrere Entscheidungsstrategien möglich. ' 
        +'Wählen Sie bitte Ihr wichtigstes Kriterium:</label></br>'
        +'<div class="container text-center" style="width:70%"><div class="form-group">'
        +'<select id="chooseResult" class="form-control form-control-lg">'
          +'<option id="ALL" value="ALL" selected>Zeige alle Strategien</option>'
          +'<option id="A1" value="A1">Schnelligkeit ++</option>'
          +'<option id="A2" value="A2">Schnelligkeit +</option>'
          +'<option id="B1" value="B1">Beides gleichermaßen</option>'
          +'<option id="B2" value="B2">Mitarbeiterzufriedenheit +</option>'
          +'<option id="G2" value="G2">Mitarbeiterzufriedenheit ++</option>'
        +'</select></div></div><hr/>';

        this.generateResultView();

        //Init der Selected Tag IDs, um die Elemente "Disablebar" zu machen
        this.selectedTagElementAll = document.getElementById("ALL");
        this.selectedTagElementA1 = document.getElementById("A1");
        this.selectedTagElementA2 = document.getElementById("A2");
        this.selectedTagElementG2 = document.getElementById("G2");
        this.selectedTagElementB2 = document.getElementById("B2");
        this.selectedTagElementB1 = document.getElementById("B1");
        
        this.chooseResult = document.getElementById('chooseResult');
        this.disableAll();
        this.checkAndEnable();
        this._addEventListenerSelect();
    }
    generateSingleResult(){
        this.main.innerHTML = '<p>'
        +'Für Sie ist eine Entscheidungsstrategie möglich:</p></br>' 
        +'<p>'+this.resultArray+'</p>';
}

    generateResultView(){
        let result = document.createElement('div');
        result.id = 'resultID'
        this.resultArray.forEach(element => {
        let p = document.createElement('p');
        let text = document.createTextNode(element);
        p.appendChild(text);
        result.appendChild(p);
        this.main.insertBefore(result,this.newRoundButton);
        //this.main.appendChild(result);
    });
    }   

checkAndEnable(){
    for (let i = 0; i < this.resultArray.length; i++) {
        const str = this.resultArray[i];
        if(str.includes(ergebnis[1])){
            this.selectedTagElementA2.disabled = false;
        }
        if(str.includes(ergebnis[0])){
            this.selectedTagElementA1.disabled = false;
        }
        if(str.includes(ergebnis[3])){
            this.selectedTagElementB2.disabled = false;
        }
        if(str.includes(ergebnis[2])){
            this.selectedTagElementB1.disabled = false;
        }
        if(str.includes(ergebnis[4])){
            this.selectedTagElementG2.disabled = false;
        }
    }
    
}

disableAll(){
    this.selectedTagElementA1.disabled = true;
    this.selectedTagElementA2.disabled = true;
    this.selectedTagElementB1.disabled = true;
    this.selectedTagElementB2.disabled = true;
    this.selectedTagElementG2.disabled = true;

}
_addEventListenerSelect(){
    self = this;
    this.chooseResult.addEventListener('change', function () {

        //Löschen von dem jetzigen Inhalt
        document.getElementById('resultID').remove();
        //Neuen Inhalt erzeugen
        
        if(self.chooseResult.value == 'ALL'){
            self.generateResultView();
        } else if (self.chooseResult.value == 'A1'){
            let result = document.createElement('div');
            result.id = 'resultID'
            let p = document.createElement('p');
            let text = document.createTextNode(ergebnis[0]);
            p.appendChild(text);
            result.appendChild(p);
            self.main.insertBefore(result,self.newRoundButton);
        }else if (self.chooseResult.value == 'A2'){
            let result = document.createElement('div');
            result.id = 'resultID'
            let p = document.createElement('p');
            let text = document.createTextNode(ergebnis[1]);
            p.appendChild(text);
            result.appendChild(p);
            self.main.insertBefore(result,self.newRoundButton);
        }else if (self.chooseResult.value == 'B1'){
            let result = document.createElement('div');
            result.id = 'resultID'
            let p = document.createElement('p');
            let text = document.createTextNode(ergebnis[2]);
            p.appendChild(text);
            result.appendChild(p);
            self.main.insertBefore(result,self.newRoundButton);
        }else if (self.chooseResult.value == 'B2'){
            let result = document.createElement('div');
            result.id = 'resultID'
            let p = document.createElement('p');
            let text = document.createTextNode(ergebnis[3]);
            p.appendChild(text);
            result.appendChild(p);
            self.main.insertBefore(result,self.newRoundButton);
        }else if (self.chooseResult.value == 'G2'){
            let result = document.createElement('div');
            result.id = 'resultID'
            let p = document.createElement('p');
            let text = document.createTextNode(ergebnis[4]);
            p.appendChild(text);
            result.appendChild(p);
            self.main.insertBefore(result,self.newRoundButton);
        }
        
    });
}

}
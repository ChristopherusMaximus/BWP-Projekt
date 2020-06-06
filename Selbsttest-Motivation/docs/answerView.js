export class answerView {
    constructor(presenter) {
        this.presenter = presenter;
        this.app = document.getElementById("app");
    }

    AnswerView(answerList) {

        this.app.innerHTML = "";

        this.divNode = document.createElement("div");
        this.app.appendChild(this.divNode);
        var counter = 5;
        var answerText = "";

        if (answerList[0] >= 6) {
            answerText += this.perfektionismus(answerList[0]);
            counter--;
        }

        if (answerList[1] >= 6) {
            answerText += this.machtwille(answerList[1]);
            counter--;
        }

        if (answerList[2] >= 6) {
            answerText += this.neugier(answerList[2]);
            counter--;
        }

        if (answerList[3] >= 6) {
            answerText += this.gestaltung(answerList[3]);
            counter--;
        }

        if (answerList[4] >= 6) {
            answerText += this.extrinisicheMotivation(answerList[4]);
            counter--;
        }

        answerText += `<br>Das Ergebnis trifft auf sie besonders zu, wenn Sie in einer Kategorie 10 oder mehr Punkte haben.<p></p>
            <br>Kategorien unter 6 Punkten werden nicht angezeigt.<p></p>`

        answerText += `<br><button id="Nochmal" class="btn btn-lg btn-success mx-2"><i class="fa fa-repeat"></i></button>
        <button id="Home" class="btn btn-lg btn-primary mx-2"><i class="fa fa-home"></i></button>`;

        this.divNode.innerHTML = answerText;

        this.ButtonStartAgain = document.getElementById('Nochmal').addEventListener('click', () => {
            window.location = './index.html';
        });

        this.ButtonHome = document.getElementById('Home').addEventListener('click', () => {
            window.location = '../../index.html';
        });
    }

    perfektionismus(perfektionismus) {
        return `<h4>Perfektionismus</h4>
        <div class="container" style="width:70%">
        <div class="progress bg-white">
        <div class="progress-bar progress-bar" role="progressbar" style="width:${perfektionismus * 10}%" aria-valuenow="${perfektionismus}" aria-valuemin="0" aria-valuemax="10">${perfektionismus}</div>
        </div>
        </div>
        + Sie stellen hohe Ansprüche an Ihre eigene Gründlichkeit und Zuverlässigkeit.
        <br>- Sie investieren oft zu viel Zeit.
        <p></p>
        `
    }

    machtwille(machtwille) {
        return `<h4>Machtwille</h4>
        <div class="container" style="width:70%">
        <div class="progress bg-white">
        <div class="progress-bar progress-bar" role="progressbar" style="width:${machtwille * 10}%" aria-valuenow="${machtwille}" aria-valuemin="0" aria-valuemax="10">${machtwille}</div>
        </div>
        </div>
        + Sie übernehmen gerne die Führungsrolle.
        <br>- Sie haben oft Angst, Fehler zu machen.
        <p></p>`
    }

    neugier(neugier) {
        return `<h4>Neugier</h4>
        <div class="container" style="width:70%">
        <div class="progress bg-white">
        <div class="progress-bar progress-bar" role="progressbar" style="width:${neugier * 10}%" aria-valuenow="${neugier}" aria-valuemin="0" aria-valuemax="10">${neugier}</div>
        </div>
        </div>
        + Sie sind vielseitig interessiert und kreativ.
        <br>- Routineaufgaben sind nicht Ihre Stärke.
        <p></p>`
    }

    gestaltung(gestaltung) {
        return `<h4>Gestaltung</h4>
        <div class="container" style="width:70%">
        <div class="progress bg-white">
        <div class="progress-bar progress-bar" role="progressbar" style="width:${gestaltung * 10}%" aria-valuenow="${gestaltung}" aria-valuemin="0" aria-valuemax="10">${gestaltung}</div>
        </div>
        </div>
        + Sie streben nach Eigenverantwortung.
        <br>- Sie verlangen manchmal zu viel von anderen.
        <p></p>`
    }

    extrinisicheMotivation(extrinisicheMotivation) {
        return `<h4>Extrinsische Motivation</h4>
        <div class="container" style="width:70%">
        <div class="progress bg-white">
        <div class="progress-bar progress-bar" role="progressbar" style="width:${extrinisicheMotivation * 10}%" aria-valuenow="${extrinisicheMotivation}" aria-valuemin="0" aria-valuemax="10">${extrinisicheMotivation}</div>
        </div>
        </div>
        Sie sind bezogen auf Ihren Beruf eher extrinsisch zu motivieren.
        <p></p>`
    }

}


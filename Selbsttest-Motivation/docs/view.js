export class View {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById("app");
    this._startButtonNode = document.getElementById("buttonStart");
    this.loadStart();
  }

  loadStart() {
    this._startButtonNode.addEventListener('click', event => {
      this.app.innerHTML = "";
      this.presenter.questionStart(0);
    });
  }

  

  renderQuestionView() {
    this.pNode = document.createElement("p");
    this.app.appendChild(this.pNode);
    this.divNode = document.createElement("div");
    this.app.appendChild(this.divNode);
    const html = `
    <div class="row justify-content-center">
    <button id="button1" class="btn btn-success m-2 d-md-block">Auf jeden Fall</button>
    <button id="button2" class="btn btn-success-light m-2">Trifft eher zu</button>
    <button id="button3" class="btn btn-warning text-dark m-2">Weiß nicht</button>
    <button id="button4" class="btn btn-danger-light m-2">Trifft eher nicht zu</button>
    <button id="button5" class="btn btn-danger m-2">Stimmt nicht</button>
    </div>
    `;
    this.divNode.innerHTML = html;
    // document.getElementById("app").contentWindow.location.reload(true);
    window.onload = function () {
      this.buttonHandlers();
    };
  }

  displayQuestion(text) {
    this.pNode.innerHTML = text;
  }

  buttonHandlers() {
    this.button1 = document.getElementById('button1').addEventListener('click', () => {
      this.option(4);
    });

    this.button2 = document.getElementById("button2").addEventListener('click', () => {
      this.option(3);
    });

    this.button3 = document.getElementById("button3").addEventListener('click', () => {
      this.option(2);
    });

    this.button4 = document.getElementById("button4").addEventListener('click', () => {
      this.option(1);
    });

    this.button5 = document.getElementById("button5").addEventListener('click', () => {
      this.option(0);
    });
  }

  option(points) {
    this.presenter.optionClicked(points);
  }
}

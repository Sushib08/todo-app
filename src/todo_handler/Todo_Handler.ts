/* eslint-disable lit/binding-positions */
/* eslint-disable no-return-assign */
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

@customElement('my-todo-handler')
export class MyTodoHandler extends LitElement {
  @property({ type: String }) word = '';

  @state() words: string[] = [];

  static styles = css`
    .bloc1 {
      border: 0.3px solid rgb(256, 256, 256);
      width: 300px;
      height: 50px;
      display: flex;
      justify-content: center;
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 25px;
      background-color: rgb(252, 252, 252);
      box-shadow: 0px 3px 6px rgb(224, 224, 224);
      border-radius: 20px;
    }
    div input {
      margin-top: 5px;
      margin-bottom: 5px;
      width: 230px;
      border: none;
      box-shadow: 0px 3px 6px rgb(224, 224, 224);
      border-radius: 30px;
      font-size: 30px;
      text-align: center;
      outline: none;
    }

    div input:focus {
      border: 1px solid #7494ff;
      box-shadow: none;
      background-color: white;
    }

    input:hover {
      background-color: #b16ff3;
    }
    .ajout-word {
      margin-top: 10px;
      width: 30px;
      height: 30px;
      margin-bottom: 5px;
      margin-left: 10px;
      border-radius: 150px;
      color: white;
      background-color: rgb(116, 148, 255);
      border: none;
      font-size: 20px;
    }
    .ajout-word:hover{
      box-shadow: 0px 3px 8px #707070;
    }
    .bloc2 {
      border: rgb(256, 256, 256) solid 1px;
      height: 300px;
      width: 300px;
      margin: auto;
      background-color: #f5f5f5;
      border-radius: 30px;
      box-shadow: 0px 3px 6px rgb(224, 224, 224);
      overflow-y: scroll;
      overflow-x: hidden;
    }
    .bloc2::-webkit-scrollbar {
      width: 10px;
    }
    .bloc2::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    .bloc2::-webkit-scrollbar-thumb {
      background: grey;
      border-radius: 10px;
    }
    .bloc2::-webkit-scrollbar-thumb:hover {
      background: #b30000;
    }
    p {
      border: 1px solid rgb(256, 256, 256);
      background-color: white;
      height: 43px;
      width: 280px;
      color: black;
      margin-left: 10px;
      border-radius: 20px;
      text-align: center;
      font-size: 30px;
      box-shadow: 0px 3px 8px rgb(224, 224, 224);
      margin-top: 15px;
      margin-bottom: 5px;
      max-width: 90%;
    }
    .couleur {
      border: 0.3px solid rgb(256, 256, 256);
      width: 290px;
      height: 97px;
      display: flex;
      justify-content: center;
      margin-top: 50px;
      margin-left: 50px;
      background-color: rgb(252, 252, 252);
      box-shadow: 0px 3px 8px rgb(224, 224, 224);
      border-radius: 45px;
    }
    .rouge {
      display: flex;
      background-color: #ff1b1b;
      padding: 25px;
      margin-top: auto;
      margin-bottom: auto;
      border-radius: 150px;
      border: none;
      width: 30px;
      height: 30px;
    }
    .rouge:hover {
      box-shadow: 0px 3px 8px #707070;
    }
    .bleu {
      display: flex;
      background-color: #1be8ff;
      padding: 25px;
      margin-top: auto;
      margin-bottom: auto;
      margin-left: 5px;
      border-radius: 150px;
      border: none;
    }
    .bleu:hover {
      box-shadow: 0px 3px 8px #707070;
    }
    .jaune {
      display: flex;
      background-color: #ffef1b;
      padding: 25px;
      margin-top: auto;
      margin-bottom: auto;
      margin-left: 5px;
      border-radius: 150px;
      border: none;
    }
    .jaune:hover {
      box-shadow: 0px 3px 8px #707070;
    }
    .vert {
      display: flex;
      background-color: #1bff49;
      padding: 25px;
      margin-top: auto;
      margin-bottom: auto;
      margin-left: 5px;
      border-radius: 150px;
      border: none;
    }
    .vert:hover {
      box-shadow: 0px 3px 8px #707070;
    }
    .choix {
      display: flex;
      flex-direction: row;
    }
    .ajout-callback {
      border: none;
      margin-top: 80px;
    }
    .bouton {
      border: none;
      margin-top: 80px;
      margin-left: 10px;
    }
    svg{
      border-radius: 50px;
    }
    svg:hover{
      box-shadow: 0px 3px 8px #707070;
    }
  `;

  inputRef: Ref<HTMLInputElement> = createRef();

  append(value: string) {
    this.words = [...this.words, value]; // Equivalent à push
  }

  render() {
    return html`
      <div class="choix">
        <div class="couleur">
          <button class="rouge"></button>
          <button class="bleu"></button>
          <button class="vert"></button>
          <button class="jaune"></button>
        </div>
        <div class="callback">
          <button class="bouton">
            <svg
              id="Button"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 31 31"
            >
              <circle
                id="Container"
                cx="15.5"
                cy="15.5"
                r="15.5"
                fill="#ff7482"
              />
              <path
                id="Tracé_2"
                data-name="Tracé 2"
                d="M5.937,11.784V23.327H19.669V11.784"
                transform="translate(2.697)"
                fill="none"
                stroke="#fff"
                stroke-width="1"
              />
              <g
                id="Ellipse_2"
                data-name="Ellipse 2"
                transform="translate(10 5)"
                fill="none"
                stroke="#fefefe"
                stroke-width="1"
              >
                <circle cx="3" cy="3" r="3" stroke="none" />
                <circle cx="3" cy="3" r="2.5" fill="none" />
              </g>
              <g
                id="Ellipse_3"
                data-name="Ellipse 3"
                transform="translate(14 14)"
                fill="none"
                stroke="#fefefe"
                stroke-width="1"
              >
                <circle cx="2" cy="2" r="2" stroke="none" />
                <circle cx="2" cy="2" r="1.5" fill="none" />
              </g>
            </svg>
          </button>
          <button class="ajout-callback">
            <svg
              id="Button"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 31 31"
            >
              <circle
                id="Container"
                cx="15.5"
                cy="15.5"
                r="15.5"
                fill="#7494ff"
              />
              <g id="Cross" transform="translate(-782 -233)">
                <line
                  id="Ligne_1"
                  data-name="Ligne 1"
                  y2="12"
                  transform="translate(797.5 242.5)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1"
                />
                <line
                  id="Ligne_2"
                  data-name="Ligne 2"
                  x2="10"
                  transform="translate(792.5 248.5)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div class="container">
        <div class="bloc1">
          <input ${ref(this.inputRef)} />
          <button
            class="ajout-word"
            @click=${() => this.append(this.inputRef.value!.value)}
          >
            +
          </button>
        </div>
        <div class="bloc2">
          ${this.words.map(value => html` <p class="word">${value}</p> `)}
          <!-- Map crée un nouveau tableau avec les résultats de l'appel d'une fonction 
        fournie sur chaque élément du tableau appelant. -->
        </div>
      </div>
    `;
  }
}

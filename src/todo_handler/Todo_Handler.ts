/* eslint-disable lit/binding-positions */
/* eslint-disable no-return-assign */
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';

@customElement('my-todo-handler')
export class MyTodoHandler extends LitElement {
  @state() words: string[] = [];

  @property({type:String}) color:string ="#f5f5f5";

  firstUpdated(){


  }


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
      background-color: #f5f5f5;
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
      background-color: #B16FF3;

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
    .ajout-word:hover {
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
      background: #BCBCBC;
      border-radius: 10px;
      border-color: #707070;
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
  `;

  inputRef: Ref<HTMLInputElement> = createRef();

  append(value: string) {
    this.words = [...this.words, value]; // Equivalent à push
    this.inputRef.value!.value = '';
  }

  render() {
    return html`
      <div class="container">
        <div class="bloc1" style='background-color : ${this.color}'>
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

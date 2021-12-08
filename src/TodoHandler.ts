/* eslint-disable no-param-reassign */
/* eslint-disable no-sequences */
/* eslint-disable lit/binding-positions */
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ref, createRef, Ref } from 'lit/directives/ref.js';
import { repeat } from 'lit/directives/repeat.js';
import { nanoid } from 'nanoid';

const check = new URL('../../assets/check.svg', import.meta.url).href;

interface Item {
  id: string;
  value: string;
  isDone: boolean;
  isHidden: boolean;
}
@customElement('my-todo-handler')
export class MyTodoHandler extends LitElement {
  @state() words: Item[] = [];

  @property({ type: String }) color: string = '#f5f5f5';

  @property({ type: String }) texteDecoration: string = 'none';

  @property({ type: Number }) opacity: Number = 1;

  @state() check: boolean = true;

  inputRef: Ref<HTMLInputElement> = createRef();

  static styles = css`
    :host {
      --app-blue: #7494ff;
    }
    .bloc1 {
      border: 0.3px solid rgb(256, 256, 256);
      width: 335px;
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
      margin-left: 5px;
      margin-bottom: 5px;
      width: 240px;
      border: none;
      box-shadow: 0px 3px 6px rgb(224, 224, 224);
      border-radius: 30px;
      font-size: 30px;
      text-align: center;
      outline: none;
    }

    div input:focus {
      border: 1px solid var(--app-blue);
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
    .ajout-word:hover {
      box-shadow: 0px 3px 8px #707070;
    }
    .done {
      border: none;
      margin-top: 0px;
      margin-left: 0px;
      border-radius: 50px;
    }
    img {
      border-radius: 150px;
    }
    img:hover {
      box-shadow: 0px 3px 8px #707070;
    }
    .bloc2 {
      border: rgb(256, 256, 256) solid 1px;
      height: 300px;
      width: 335px;
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
      background: #bcbcbc;
      border-radius: 10px;
      border-color: #707070;
    }
    .text {
      border: 1px solid rgb(256, 256, 256);
      background-color: white;
      height: 43px;
      width: 300px;
      color: black;
      margin-left: 10px;
      border-radius: 20px;
      text-align: center;
      font-size: 30px;
      box-shadow: 0px 3px 8px rgb(224, 224, 224);
      margin-top: 15px;
      margin-bottom: 5px;
      max-width: 95%;
    }
    .supp {
      position: absolute;
      right: 6px;
      margin-top: 10px;
      margin-bottom: 5px;
      border-radius: 30px;
      color: white;
      background-color: #ff5252;
      border: none;
      font-size: 20px;
    }
    .supp:hover {
      color: #970101;
      box-shadow: 0px 3px 8px #707070;
    }
    .element {
      position: relative;
    }
    .element .coche {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 10px;
      width: 10px;
      left: 5px;
      top: 10px;
    }
    .checkmark {
      position: absolute;
      top: 20%;
      left: 6px;
      height: 25px;
      width: 25px;
      background-color: #eceaeac5;
      border: solid 1px #9b9a9a8f;

      border-radius: 20px;
    }
    .element:hover .coche ~ .checkmark {
      box-shadow: #5c5b5b;
    }
    .element .coche:checked ~ .checkmark {
      background-color: var(--app-blue);
    }
    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }
    .element .coche:checked ~ .checkmark:after {
      display: block;
    }
    .element .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .bloc3 {
      display: flex;
      justify-content: space-around;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      border: rgb(256, 256, 256) solid 1px;
      height: 70px;
      width: 500px;
      background-color: #f5f5f5cc;
      border-radius: 30px;
      box-shadow: 0px 3px 6px rgb(224, 224, 224);
    }
    .nbItems {
      font-size: 15px;
      max-width: 35%;
      padding-left: 5px;
      margin-top: 25px;
    }
    strong {
      color: red;
    }
    .clear {
      border: none;
      border-radius: 50px;
      border-color: #f5f5f5;
      font-size: 15px;
    }
    .clear:hover {
      color: #b16ff3;
    }
    .filtres {
      margin-top: 4%;
    }
    .filtre {
      border: none;
      font-size: 15px;
      color: #838080;
    }
    .filtre:hover {
      text-shadow: 0px 3px 8px #707070;
    }
    .filtre:focus {
      border: 2px solid #b16ff3;
    }
  `;

  append(value: string) {
    const item: Item = { id: nanoid(), value, isDone: false, isHidden: false };
    this.words = [...this.words, item];
    this.inputRef.value!.value = '';
  }

  delete(id: string) {
    const wordsCopy = [...this.words];
    const _id = wordsCopy.findIndex(value => value.id === id);
    wordsCopy.splice(_id, 1);
    this.words = [...wordsCopy];
  }

  deleteAllChecked() {
    const wordsCopy = this.words.filter(item => item.isDone !== true);
    this.words = [...wordsCopy];
  }

  checkbox(id: string) {
    const wordsCopy = [...this.words];
    // eslint-disable-next-line no-multi-assign
    const item = wordsCopy.find(value => value.id === id);
    item!.isDone = !item?.isDone;
    this.words = [...wordsCopy];
  }

  checkAll() {
    // eslint-disable-next-line no-shadow
    const wordsCopy = this.words.map(item => ({
      ...item,
      isDone: this.check,
    }));
    this.check = !this.check;
    this.words = [...wordsCopy];
  }

  all() {
    const wordsCopy = this.words.map(item => {
      item.isHidden = false;
      return item;
    });
    this.words = [...wordsCopy];
  }

  active() {
    const wordsCopy = this.words.map(item => {
      if (item.isDone) {
        item.isHidden = true;
        return item;
      }
      item.isHidden = false;
      return item;
    });
    this.words = [...wordsCopy];
  }

  completed() {
    const wordsCopy = this.words.map(item => {
      if (item.isDone) {
        item.isHidden = false;
        return item;
      }
      item.isHidden = true;
      return item;
    });
    this.words = [...wordsCopy];
  }

  render() {
    return html`
      <div class="container">
        <div class="bloc1" style="background-color : ${this.color}">
          <input ${ref(this.inputRef)} maxlength="12" />
          <button
            class="ajout-word"
            @click=${() => {
              this.append(this.inputRef.value!.value);
              this.opacity = 1;
              this.texteDecoration = 'none';
            }}
          >
            +
          </button>
          <button class="done" @click=${this.checkAll}>
            <img alt="check logo" src=${check} />
          </button>
        </div>
        <div class="bloc2">
          ${repeat(
            this.words,
            word => word.id,
            value =>
              html`
                <label class="element">
                  <p
                    class="text"
                    style="position: relative;
                    text-decoration: ${value.isDone ? 'line-through' : 'none'};
                    opacity: ${value.isDone ? 0.2 : 1};
                    display:${value.isHidden ? 'none' : 'block'}"
                  >
                    <input
                      class="coche"
                      type="checkbox"
                      ?checked=${value.isDone}
                      @change=${() => this.checkbox(value.id)}
                    />
                    <span class="checkmark"></span> ${value.value}
                    <button
                      class="supp"
                      @click=${() => {
                        this.delete(value.id);
                      }}
                    >
                      X
                    </button>
                  </p>
                </label>
              `
          )}
        </div>
        <div class="bloc3">
          <p class="nbItems">
            <strong>${this.words.length}</strong> items left
          </p>
          <div class="filtres">
            <button class="filtre" @click=${this.all}>
              All <strong>${this.words.length}</strong>
            </button>
            <button class="filtre" @click=${this.active}>
              Active
              <strong
                >${this.words.filter(item => item.isDone === false)
                  .length}</strong
              >
            </button>
            <button class="filtre" @click=${this.completed}>
              completed
              <strong
                >${this.words.filter(item => item.isDone === true)
                  .length}</strong
              >
            </button>
          </div>
          <button
            @click=${this.deleteAllChecked}
            class="clear"
            style="opacity: ${this.words.filter(item => item.isDone === true)
                  .length ? 1 : 0}"
          >
            Clear completed
          </button>
        </div>
      </div>
    `;
  }
}

/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './TodoHandler';

@customElement('todo-app')
export class TodoApp extends LitElement {
  @property({ type: String }) title = 'My app';

  @state() isConnected: boolean = false;

  @state() color = '#f5f5f5'; // On initialise la couleur

  static styles = css`
    * {
      font-family: cursive;
    }
    .appContainer {
      width: 100%;
      height: 100vh;
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
    svg {
      border-radius: 50px;
    }
    svg:hover {
      box-shadow: 0px 3px 8px #707070;
    }
    .disconnected {
      display: flex;
      justify-content: center;
      margin-top: 100px;
      font-family: 'Segoe UI';
      font-size: 20px;
    }
  `;

  render() {
    return html`
      <div class="appContainer">
        <div class="choix">
          <div class="couleur">
            <button
              @click=${() => (this.color = '#ff1b1b')}
              class="rouge"
            ></button>
            <button
              @click=${() => (this.color = '#1be8ff')}
              class="bleu"
            ></button>
            <button
              @click=${() => (this.color = '#1bff49')}
              class="vert"
            ></button>
            <button
              @click=${() => (this.color = '#ffef1b')}
              class="jaune"
            ></button>
          </div>
          <div class="trash">
            <button
              class="bouton"
              @click=${() => {
                this.isConnected = false;
                this.color = '#f5f5f5'; // Cela le réinitialise la couleur quand on appui sur le bouton
              }}
            >
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
            <button
              class="ajout-callback"
              @click=${() => {
                this.isConnected = true;
              }}
            >
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
        ${this.isConnected
          ? html`<my-todo-handler color=${this.color}></my-todo-handler>`
          : html`<p class="disconnected">The component was disconnected</p>`}
      </div>
    `;
  }
}

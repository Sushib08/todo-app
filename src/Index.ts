/* eslint-disable import/extensions */
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './todo_handler';

@customElement('todo-app')
export class TodoApp extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
        *{
            font-family: cursive;
        }
        .appContainer {
            width: 100%;
            height: 100vh;
        }`;

  render() {
    return html`
      <div class="appContainer">
        <my-todo-handler></my-todo-handler>
      </div>
    `;
  }
}

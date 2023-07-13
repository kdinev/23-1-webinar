import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcDialogComponent, IgcRippleComponent, IgcSnackbarComponent } from 'igniteui-webcomponents';

defineComponents(IgcDialogComponent, IgcButtonComponent, IgcSnackbarComponent, IgcRippleComponent);

@customElement('app-animations')
export default class Animations extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
    }
    .snackbar {
      height: max-content;
      min-width: min-content;
    }
    .button {
      margin: 24px;
      height: max-content;
    }
  `;

  @query('#dialog')
  private dialog?: IgcDialogComponent;

  @query('#snackbar')
  private snackbar?: IgcSnackbarComponent;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-dialog ?close-on-outside-click="${true}" ?keep-open-on-escape="${false}" id="dialog">
        <h5 slot="title">
          Confirmation
        </h5>
        <p>Do you want to end this session?</p>
        <div slot="footer">
          <igc-button variant="flat" @click=${() => this.dialog?.toggle()}>NO</igc-button>
          <igc-button variant="flat" @click=${() => this.dialog?.toggle()}>YES</igc-button>
        </div>
      </igc-dialog>
      <igc-snackbar action-text="Dismiss" @action=${() => this.snackbar?.toggle()} id="snackbar" class="snackbar">
        We're running out of time!
      </igc-snackbar>
      <igc-button @click=${() => this.snackbar?.toggle()} class="button">
        How are we doing?
        <igc-ripple></igc-ripple>
      </igc-button>
      <igc-button @click=${() => this.dialog?.toggle()} class="button">
        End Session
        <igc-ripple></igc-ripple>
      </igc-button>
    `;
  }
}

import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcComboComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import { EmployeesType, SuppliersType } from '../static-data/northwind-model';
import NorthwindService from '../service/Northwind-service';

defineComponents(IgcInputComponent, IgcIconComponent, IgcComboComponent, IgcButtonComponent, IgcRippleComponent);

@customElement('app-combo')
export default class Combo extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      padding: 24px;
      width: 420px;
      min-width: 50px;
      min-height: 50px;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 12px 0 0;
      width: 100%;
      min-width: 50px;
      min-height: 50px;
    }
    .h3 {
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .input {
      margin: 24px 0 12px;
      width: 100%;
      height: max-content;
      min-width: min-content;
    }
    .combo {
      margin: 12px 0;
      width: 100%;
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
      flex-shrink: 0;
    }
  `;

  constructor() {
    super();
    this.northwindSuppliers = this.northwindService.getData('SuppliersType');
    this.northwindEmployees = this.northwindService.getData('EmployeesType');
  }

  private northwindService: NorthwindService = new NorthwindService();

  @property()
  private northwindSuppliers?: SuppliersType[];

  @property()
  private northwindEmployees?: EmployeesType[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h3 class="h3">
          Sign-up Form
        </h3>
        <igc-input type="email" label="Email address" ?required="${true}" ?outlined="${true}" class="input">
          <span slot="prefix">
            <span class="material-icons icon">
              email
            </span>
          </span>
        </igc-input>
        <igc-combo ?outlined="${true}" .data="${this.northwindSuppliers}" label="Company" value-key="supplierID" display-key="companyName" ?autoFocusSearch="${true}" class="combo">
          <span slot="prefix">
            <span class="material-icons icon">
              pin_drop
            </span>
          </span>
        </igc-combo>
        <igc-combo ?outlined="${true}" .data="${this.northwindEmployees}" label="Position" value-key="employeeID" display-key="title" ?autoFocusSearch="${true}" class="combo">
          <span slot="prefix">
            <span class="material-icons icon">
              person
            </span>
          </span>
        </igc-combo>
        <div class="row-layout group_1">
          <igc-button class="button">
            Submit
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
    `;
  }
}

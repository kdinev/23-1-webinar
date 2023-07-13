import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import { EmployeesType, SuppliersType } from '../static-data/northwind-model';
import NorthwindService from '../service/Northwind-service';

@customElement('app-export-summaries')
export default class ExportSummaries extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .grid {
      margin: 24px;
      min-width: 600px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.northwindEmployees = this.northwindService.getData('EmployeesType');
  }

  private northwindService: NorthwindService = new NorthwindService();

  @property()
  private northwindEmployees?: EmployeesType[];

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <igc-grid .data="${this.northwindEmployees}" primary-key="employeeID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" auto-generate="false" height="790px" class="ig-typography ig-scrollbar grid">
        <igc-grid-toolbar>
          <igc-grid-toolbar-actions>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
          </igc-grid-toolbar-actions>
          <igc-grid-toolbar-title>Excel Export with Summaries</igc-grid-toolbar-title>
        </igc-grid-toolbar>
        <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="lastName" data-type="string" header="lastName" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="firstName" data-type="string" header="firstName" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="title" data-type="string" header="title" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="birthDate" data-type="date" header="birthDate" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="hireDate" data-type="date" header="hireDate" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="address.street" data-type="string" header="address street" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="address.city" data-type="string" header="address city" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="address.region" data-type="string" header="address region" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="address.postalCode" data-type="string" header="address postalCode" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="address.country" data-type="string" header="address country" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="address.phone" data-type="string" header="address phone" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="managerID" data-type="number" header="managerID" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="notes" data-type="string" header="notes" sortable="true" has-summary="true" selectable="false"></igc-column>
        <igc-column field="avatarUrl" data-type="string" header="avatarUrl" sortable="true" has-summary="true" selectable="false"></igc-column>
      </igc-grid>
    `;
  }
}

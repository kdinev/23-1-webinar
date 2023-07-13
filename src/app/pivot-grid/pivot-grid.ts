import { html, css, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { IgcPivotDataSelectorComponent, IgcPivotDateDimension, IgcPivotGridComponent } from '@infragistics/igniteui-webcomponents-grids/grids';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import { SalesType } from '../static-data/financial-model';
import FinancialService from '../service/Financial-service';

@customElement('app-pivot-grid')
export default class PivotGrid extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
    }
    .pivot-grid {
      margin: 24px;
      height: 790px;
      min-width: 600px;
      min-height: 300px;
    }
  `;

  constructor() {
    super();
    this.financialSales = this.financialService.getData('SalesType');
  }

  private financialService: FinancialService = new FinancialService();

  @property()
  private dateDimension: any = new IgcPivotDateDimension({
    memberName: 'Date',
    enabled: true,
  }, {
    months: false,
    quarters: true,
    years: true,
  });

  @property()
  private pivotConfigHierarchy: any = {
    columns: [
      {
        memberName: 'Country',
        enabled: true,
      },
      {
        memberName: 'Product',
        enabled: true,
      },
    ],
    rows: [
      this.dateDimension,
    ],
    values: [
      {
        member: 'Sales',
        aggregate: {
          aggregatorName: 'SUM',
          key: 'Sum Of Sales',
          label: 'Sum',
        },
        enabled: false,
        dataType: 'currency',
      },
      {
        member: 'Profit',
        aggregate: {
          aggregatorName: 'SUM',
          key: 'Sum Of Profit',
          label: 'Sum',
        },
        enabled: true,
        dataType: 'currency',
      },
    ],
    filters: [
      {
        memberName: 'MonthName',
        enabled: false,
      },
    ],
  };

  @property()
  private financialSales?: SalesType[];

  @query('#pivot-grid')
  private pivotGrid?: IgcPivotGridComponent;

  @query('#pivot-data-selector')
  private pivotDataSelector?: IgcPivotDataSelectorComponent ;


  firstUpdated() {
    if (this.pivotDataSelector && this.pivotGrid) {
      this.pivotDataSelector.grid = this.pivotGrid;
    }
  }
  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="row-layout group">
        <igc-pivot-grid .data="${this.financialSales}" .pivotConfiguration="${this.pivotConfigHierarchy}" ?super-compact-mode="${true}" ?default-expand-state="${true}" id="pivot-grid" class="ig-typography ig-scrollbar pivot-grid"></igc-pivot-grid>
        <igc-pivot-data-selector id="pivot-data-selector"></igc-pivot-data-selector>
      </div>
    `;
  }
}

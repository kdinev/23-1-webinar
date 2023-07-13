import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAvatarComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcIconComponent);

@customElement('app-overview')
export default class Overview extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .h5 {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .list {
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h5 class="h5">
          Overview
        </h5>
        <igc-list class="list">
          <igc-list-item @click="${() => Router.go('/combo')}">
            <igc-avatar FontSet="Material" slot="start" shape="circle">
              <span class="material-icons">list</span>
            </igc-avatar>
            <div slot="title">Combo Component</div>
            <div slot="subtitle">Web Components</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go('/stepper')}">
            <igc-avatar FontSet="Material" slot="start" shape="circle">
              <span class="material-icons">tab_unselected</span>
            </igc-avatar>
            <div slot="title">Stepper Component</div>
            <div slot="subtitle">Web Components</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go('/pivot-grid')}">
            <igc-avatar FontSet="Material" slot="start" shape="circle">
              <span class="material-icons">grid_on</span>
            </igc-avatar>
            <div slot="title">Pivot Grid Component</div>
            <div slot="subtitle">Web Components</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go('/export-summaries')}">
            <igc-avatar FontSet="Material" slot="start" shape="circle">
              <span class="material-icons">grid_on</span>
            </igc-avatar>
            <div slot="title">Grid Excel Export with Summaries</div>
            <div slot="subtitle">Angular + Web Components</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go('/animations')}">
            <igc-avatar FontSet="Material" slot="start" shape="circle">
              <span class="material-icons">transfer_within_a_station</span>
            </igc-avatar>
            <div slot="title">Animations - Dialog, Snackbar, Toast</div>
            <div slot="subtitle">Web Components</div>
          </igc-list-item>
        </igc-list>
      </div>
    `;
  }
}

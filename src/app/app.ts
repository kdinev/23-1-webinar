import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      flex-shrink: 0;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      flex-grow: 1;
    }
    .nav-drawer::part(main) {
      width: 320px;
    }
    .h6 {
      margin: 0;
      flex-shrink: 0;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      flex-grow: 1;
    }
  `;

  @query('#nav-drawer')
  private navDrawer?: IgcNavDrawerComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <igc-icon-button slot="start" variant="flat" @click=${() => this.navDrawer?.toggle()}>
          <span class="material-icons">
            menu
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <div class="row-layout group">
          <h6 class="h6">
            23.1 Release Features
          </h6>
        </div>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            search
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            favorite
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            more_vert
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
      </igc-navbar>
      <div class="row-layout group_1">
        <igc-nav-drawer ?open="${true}" position="relative" id="nav-drawer" class="nav-drawer">
          <igc-nav-drawer-item @click="${() => Router.go('/overview')}">
            <span slot="icon">
              <span class="material-icons icon">
                book
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Overview</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('/combo')}">
            <span slot="icon">
              <span class="material-icons icon">
                list
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Combo</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('/stepper')}">
            <span slot="icon">
              <span class="material-icons icon">
                tab_unselected
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Stepper</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('/pivot-grid')}">
            <span slot="icon">
              <span class="material-icons icon">
                grid_on
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Pivot Grid</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('/export-summaries')}">
            <span slot="icon">
              <span class="material-icons icon">
                grid_on
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Excel Export with Summaries</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go('/animations')}">
            <span slot="icon">
              <span class="material-icons icon">
                transfer_within_a_station
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Animations</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <router-outlet class="view-container"></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}

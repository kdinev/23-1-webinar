import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcExpansionPanelComponent, IgcStepperComponent } from 'igniteui-webcomponents';

defineComponents(IgcStepperComponent, IgcExpansionPanelComponent);

@customElement('app-stepper')
export default class Stepper extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .stepper {
      margin: 24px;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .step-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .step-content_1 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 100%;
      min-width: 50px;
      min-height: 50px;
    }
    .expansion-panel {
      height: max-content;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .hyperlink {
      color: hsla(var(--ig-info-500));
      cursor: pointer;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .hyperlink_1 {
      color: hsla(var(--ig-info-500));
      cursor: pointer;
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-stepper title-position="bottom" class="stepper">
        <igc-step ?optional="${true}">
          <div class="row-layout step-content">
            <div class="row-layout group">
              <p class="typography__body-1 text">
                Watch the Infragistics 23.1 Release Webinar live, or watch the recording on our 
              </p>
              <a href="https://www.youtube.com/Infragistics" class="typography__body-1 hyperlink">
                YouTube Channel!
              </a>
            </div>
          </div>
          <p slot="title">23.1 Webinar</p>
        </igc-step>
        <igc-step ?optional="${true}">
          <div class="column-layout step-content">
            <igc-expansion-panel ?open="${true}" class="expansion-panel">
              <a href="https://www.infragistics.com/community/blogs/b/jason_beres/posts/product-release-what-new-in-infragistics-ultimate-23-1" class="typography__body-1 hyperlink_1">
                23.1 Ultimate Blog
              </a>
              <a href="https://www.infragistics.com/community/blogs/b/infragistics/posts/app-builder-release-23-1-whats-new" class="typography__body-1 hyperlink_1">
                23.1 App Builder Blog
              </a>
              <a href="https://www.infragistics.com/community/blogs/b/infragistics/posts/ignite-ui-for-angular-23-1" class="typography__body-1 hyperlink_1">
                23.1 Angular Blog
              </a>
              <a href="https://www.infragistics.com/community/blogs/b/infragistics/posts/ignite-ui-for-web-components-23-1-release" class="typography__body-1 hyperlink_1">
                23.1 Web Components Blog
              </a>
              <a href="https://www.infragistics.com/community/blogs/b/infragistics/posts/ignite-ui-for-blazor-23-1-release" class="typography__body-1 hyperlink_1">
                23.1 Blazor Blog
              </a>
              <a href="https://www.infragistics.com/community/blogs/b/infragistics/posts/comprehensive-guide-to-angular-standalone-components" class="typography__body-1 hyperlink_1">
                Guide to Angular Standalone Components
              </a>
              <span slot="title">Release Blogs</span>
              <span slot="subtitle">Summary of all you need to know about 23.1</span>
            </igc-expansion-panel>
            <igc-expansion-panel ?open="${true}" class="expansion-panel">
              <a href="https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/how-to/how-to-use-standalone-components" class="typography__body-1 hyperlink_1">
                Ignite UI for Angular Standalone Components [Dev Preview]
              </a>
              <a href="https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/grids/pivot-grid/overview" class="typography__body-1 hyperlink_1">
                Ignite UI for Web Components Pivot Grid
              </a>
              <a href="https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/inputs/combo/overview" class="typography__body-1 hyperlink_1">
                Ignite UI for Web Components Combo Box
              </a>
              <a href="https://www.infragistics.com/products/ignite-ui-web-components/web-components/components/layouts/stepper" class="typography__body-1 hyperlink_1">
                Ignite UI for Web Components Stepper 
              </a>
              <span slot="title">Demos</span>
              <span slot="subtitle">New samples and docs to check out from 23.1</span>
            </igc-expansion-panel>
          </div>
          <p slot="title">Try Demos</p>
          <p slot="subtitle">(Optional)</p>
        </igc-step>
        <igc-step ?invalid="${true}">
          <div class="row-layout step-content_1">
            <a href="https://appbuilder.indigo.design/?_ga=2.5508087.590545617.1689165606-373957206.1665744569" class="hyperlink">
              <h2>Start Trial Now</h2>
            </a>
          </div>
          <p slot="title">Start a Trial</p>
        </igc-step>
      </igc-stepper>
    `;
  }
}

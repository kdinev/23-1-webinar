import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './overview/overview';
import './combo/combo';
import './stepper/stepper';
import './pivot-grid/pivot-grid';
import './export-summaries/export-summaries';
import './animations/animations';

export const routes: Route[] = [
  { path: '', component: 'app-overview', name: 'Overview' },
  { path: 'overview', component: 'app-overview', name: 'Overview' },
  { path: 'combo', component: 'app-combo', name: 'Combo' },
  { path: 'stepper', component: 'app-stepper', name: 'Stepper' },
  { path: 'pivot-grid', component: 'app-pivot-grid', name: 'Pivot Grid' },
  { path: 'export-summaries', component: 'app-export-summaries', name: 'Export Summaries' },
  { path: 'animations', component: 'app-animations', name: 'Animations' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];

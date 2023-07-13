import { expect } from '@open-wc/testing';
import PivotGrid from './pivot-grid.js';

describe('PivotGrid', () => {
  it('<app-pivot-grid> is an instance of PivotGrid', async () => {
    const element = document.createElement('app-pivot-grid');
    expect(element).to.be.instanceOf(PivotGrid);
  });
});

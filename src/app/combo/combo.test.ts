import { expect } from '@open-wc/testing';
import Combo from './combo.js';

describe('Combo', () => {
  it('<app-combo> is an instance of Combo', async () => {
    const element = document.createElement('app-combo');
    expect(element).to.be.instanceOf(Combo);
  });
});

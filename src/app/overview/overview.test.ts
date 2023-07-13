import { expect } from '@open-wc/testing';
import Overview from './overview.js';

describe('Overview', () => {
  it('<app-overview> is an instance of Overview', async () => {
    const element = document.createElement('app-overview');
    expect(element).to.be.instanceOf(Overview);
  });
});

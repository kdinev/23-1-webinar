import { expect } from '@open-wc/testing';
import Animations from './animations.js';

describe('Animations', () => {
  it('<app-animations> is an instance of Animations', async () => {
    const element = document.createElement('app-animations');
    expect(element).to.be.instanceOf(Animations);
  });
});

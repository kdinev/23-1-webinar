import { expect } from '@open-wc/testing';
import ExportSummaries from './export-summaries.js';

describe('ExportSummaries', () => {
  it('<app-export-summaries> is an instance of ExportSummaries', async () => {
    const element = document.createElement('app-export-summaries');
    expect(element).to.be.instanceOf(ExportSummaries);
  });
});

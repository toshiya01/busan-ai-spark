import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Index from '../pages/Index';
import React from 'react';

// Mock scrollIntoView since jsdom doesn't support it
window.HTMLElement.prototype.scrollIntoView = function() {};

describe('Index Page Assembly', () => {
  it('renders Header, Hero, Logos, SaseDiagram, ThreatDashboard, PricingCalculator, and Footer', () => {
    render(<Index />);
    // Verify there are FYNSEC texts in the document (logo in header and footer)
    expect(screen.getAllByText('FYNSEC').length).toBeGreaterThan(0);
    expect(screen.getByText(/Elevating Enterprise/i)).toBeInTheDocument();
    expect(screen.getByText(/SASE Cloud Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/Custom Service Configurator/i)).toBeInTheDocument();
  });
});

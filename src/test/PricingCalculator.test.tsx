import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PricingCalculator from '../components/PricingCalculator';
import React from 'react';

describe('PricingCalculator Component', () => {
  it('renders custom sliders and dynamic calculation output', () => {
    render(<PricingCalculator />);
    expect(screen.getByText(/Custom Service Configurator/i)).toBeInTheDocument();
    expect(screen.getByText(/Estimated Price/i)).toBeInTheDocument();
  });
});

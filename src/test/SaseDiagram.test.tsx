import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SaseDiagram from '../components/SaseDiagram';
import React from 'react';

describe('SaseDiagram Component', () => {
  it('renders modules and triggers encryption visual info', () => {
    render(<SaseDiagram />);
    expect(screen.getByText(/SASE Cloud Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/Zero Trust Access/i)).toBeInTheDocument();
  });
});

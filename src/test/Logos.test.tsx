import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logos from '../components/Logos';
import React from 'react';

describe('Logos Component', () => {
  it('renders logo items', () => {
    render(<Logos />);
    expect(screen.getByText(/TRUSTED BY INDUSTRY LEADERS/i)).toBeInTheDocument();
  });
});

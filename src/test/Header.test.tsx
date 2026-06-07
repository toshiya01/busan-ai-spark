import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../components/Header';
import React from 'react';

describe('Header Component', () => {
  it('renders the logo name and CTA button', () => {
    render(<Header />);
    expect(screen.getByText('FYNSEC')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Book a Demo/i })).toBeInTheDocument();
  });
});

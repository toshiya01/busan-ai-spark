import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../components/Hero';
import React from 'react';

describe('Hero Component', () => {
  it('renders the core security slogan', () => {
    render(<Hero />);
    expect(screen.getByText(/Elevating Enterprise/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /보안 무료 진단/i })).toBeInTheDocument();
  });
});

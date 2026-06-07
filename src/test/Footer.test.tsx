import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../components/Footer';
import React from 'react';

describe('Footer Component', () => {
  it('renders contact email and copyrights', () => {
    render(<Footer />);
    expect(screen.getByText(/hello@fynsec.com/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
});

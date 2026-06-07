import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ThreatDashboard from '../components/ThreatDashboard';
import React from 'react';

// Mock scrollIntoView since jsdom doesn't support it
window.HTMLElement.prototype.scrollIntoView = function() {};

describe('ThreatDashboard Component', () => {
  it('renders dashboard widgets', () => {
    render(<ThreatDashboard />);
    expect(screen.getByText(/Vulnerability Scan Dashboard/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /스캔 시작/i })).toBeInTheDocument();
  });
});

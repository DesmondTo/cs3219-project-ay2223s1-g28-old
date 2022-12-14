import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';

describe('Navbar component', () => {
  it('renders "PeerPrep" text', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const textElement = screen.getByText('PeerPrep');
    expect(textElement).toBeInTheDocument();
  });

  it('renders "Sign in" button', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const linkElements = screen.getAllByRole('link');
    const signinPageLink = linkElements.find((linkElement) => linkElement.textContent === "Sign in") 
    expect(signinPageLink).toBeInTheDocument();
  });

  it('renders "Sign up" link', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const linkElements = screen.getAllByRole('link');
    const signupPageLink = linkElements.find((linkElement) => linkElement.textContent === "Sign up") 
    expect(signupPageLink).toBeInTheDocument();
  });

  it('changes URL to "/signup" upon clicking "Sign up" button', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const buttonElement = screen.getByText('Sign up');
    userEvent.click(buttonElement)
    expect(global.window.location.href).toContain('/signup')
  });

  it('changes URL to "/signin" upon clicking "Sign in" button', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const buttonElement = screen.getByText('Sign in');
    userEvent.click(buttonElement)
    expect(global.window.location.href).toContain('/signin')
  });
});

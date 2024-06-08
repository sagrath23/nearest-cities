import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should be rendered successfully', () => {
    render(<App />);

    expect(screen.getByText('Find a city')).toBeInTheDocument();
  });

  
});

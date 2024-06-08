import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App tests', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should be rendered successfully', () => {
    render(<App />);

    expect(screen.getByText('Find a city')).toBeInTheDocument();
  });

  describe('when user add text to input field', () => {
    it('should filter city list', () => {
      const cityName = 'Pretty Bayou';

      render(<App />);

      // type city's name in the input
      userEvent.type(screen.getByPlaceholderText('type a city name'), cityName);

      // click over first element in list
      userEvent.click(screen.getByText(cityName));

      // validate that only 4 nearest cities are being rendered
      expect(screen.getByText('Cedar Grove')).toBeInTheDocument();
      expect(screen.getByText('Hiland Park')).toBeInTheDocument();
      expect(screen.getByText('Lower Grand Lagoon')).toBeInTheDocument();
      expect(screen.getByText('Lynn Haven')).toBeInTheDocument();
    })
  });


});

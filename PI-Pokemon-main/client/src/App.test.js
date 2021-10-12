import { render, screen } from '@testing-library/react';
import App from './App';
import Home from "./components/Home.jsx";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



describe('Home', () => {
  it("getObjectDescription to be truthy", () => {
      // Con toBeTruthy estamos diciendole a jest que esperamos que exista nuestro método
          expect(Home).toBeTruthy();
      });
  })
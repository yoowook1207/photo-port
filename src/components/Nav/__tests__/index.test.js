import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Nav />);
    });
  
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
      });
  })

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
        const { getByLabelText } = render(<Nav />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    // Assert  
    });
  })  

  describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })
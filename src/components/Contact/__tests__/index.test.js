/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {

    it('renders 1', () => {
        render(<Contact />);
    });

    it('renders 2', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
      })
}) 

it('renders 3', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })
   
it('renders 4', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
})
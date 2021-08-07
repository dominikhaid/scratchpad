import {render, fireEvent, cleanup, waitFor} from '@testing-library/react';
import TestComp from './TestComp';
import React from 'react';

afterEach(cleanup);

it('should take a snapshot', () => {
  const {asFragment} = render(<TestComp />);

  expect(asFragment(<TestComp />)).toMatchSnapshot();
});

it('should equal to 0', () => {
  const {getByTestId} = render(<TestComp />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});

it('should be enabled', () => {
  const {getByTestId} = render(<TestComp />);
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
});

it('should be disabled', () => {
  const {getByTestId} = render(<TestComp />);
  expect(getByTestId('button-down')).toBeDisabled();
});

it('increments counter', () => {
  const {getByTestId} = render(<TestComp />);

  fireEvent.click(getByTestId('button-up'));

  expect(getByTestId('counter')).toHaveTextContent('1');
});

it('decrements counter', () => {
  const {getByTestId} = render(<TestComp />);

  fireEvent.click(getByTestId('button-down'));

  expect(getByTestId('counter')).toHaveTextContent('-1');
});

it('increments counter after 0.5s', async () => {
  const {getByTestId, getByText} = render(<TestComp />);

  fireEvent.click(getByTestId('button-getData'));

  const counter = await waitFor(() => getByText('1'));

  expect(counter).toHaveTextContent('1');
});

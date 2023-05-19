import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { it, expect } from '@jest/globals';
import MyProfile from '../components/MyProfile';
import store from '../redux/store';

it('renders correctly', () => {
  const rockets = [
    { id: 1, rocket_name: 'Mission 1', reserved: true },
    { id: 2, rocket_name: 'Mission 2', reserved: false },
  ];
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <MyProfile rockets={rockets} />
      </BrowserRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});

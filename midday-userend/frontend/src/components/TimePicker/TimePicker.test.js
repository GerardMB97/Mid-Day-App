import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import TimePicker from '.';

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('react-native-modal-datetime-picker', () => 'Picker');

describe('Given a TimePicker component', () => {
  test('Then it should render correctly', () => {
    const rendered = render(<TimePicker></TimePicker>);

    const button = rendered.getByTestId('show');
    fireEvent.press(button);

    expect(rendered).toMatchSnapshot();
  });
});

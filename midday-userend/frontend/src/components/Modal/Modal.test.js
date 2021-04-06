import React from 'react';
import { render } from 'react-native-testing-library';
import Modal from '.';

describe('Given a Modal component', () => {
  describe('When rendered', () => {
    test('Then it should render correctly', () => {
      const tree = render(<Modal modalText='I"m a modal' ></Modal>);

      expect(tree).toMatchSnapshot();
    });
  });
});

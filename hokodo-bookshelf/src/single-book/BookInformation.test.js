import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import BookInformation from './BookInformation';

const defaultProps = {
  book: {
    id: '12345',
    cover: 'cover',
    isbn: '1234567890',
    title: 'Title',
    subtitle: 'Subtitle',
    author: 'Author',
    published: '2012-07-01T00:00:00.000Z',
    publisher: 'Publisher',
    pages: 999,
    description: 'Description',
    website: 'website',
  },
};

/**
 * Factory function to create a ShallowWrapper for the BookInformation component.
 * @function setup
 * @param {object} props – Component props specific to this etup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<BookInformation {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-book-information');
  expect(component.length).toBe(1);
});

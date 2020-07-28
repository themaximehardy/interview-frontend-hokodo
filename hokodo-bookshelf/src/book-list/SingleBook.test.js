import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import SingleBook from './SingleBook';

const book = {
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
};

const defaultProps = { book };

/**
 * Factory function to create a ShallowWrapper for the SingleBook component.
 * @function setup
 * @param {object} props – Component props specific to this etup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SingleBook {...setupProps} />);
};

let wrapper;
beforeEach(() => {
  wrapper = setup();
});
test('renders without error', () => {
  const component = findByTestAttr(wrapper, 'component-single-book');
  expect(component.length).toBe(1);
});

test('renders title correctly', () => {
  const title = findByTestAttr(wrapper, 'book-title');
  expect(title.text()).toBe(book.title);
});

test('renders button more information correctly', () => {
  const button = findByTestAttr(wrapper, 'button-more-information');
  expect(button.props().to).toBe(`/book/${book.id}`);
});

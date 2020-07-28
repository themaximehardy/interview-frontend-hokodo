export default {
  bookList: {
    link: '/',
    name: 'Book List',
  },
  bookDetail: {
    link: (id) => `/book/${id}`,
    name: 'Book Detail',
  },
};

import ApplicationAdapter from 'da-vinci/application/adapter';

export default ApplicationAdapter.extend({

  createList() {
    return this.get('ajax').request('/movies');
  },
});

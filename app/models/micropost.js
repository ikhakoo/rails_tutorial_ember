import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  picture: DS.attr('string'), //we  might change that to pictureUrl

  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  user: DS.belongsTo('user')
});

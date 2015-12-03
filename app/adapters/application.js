import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: Ember.computed(function(){
    var token = Ember.$('meta[name="csrf-token"]').attr('content');

    return {"X-CSRF-Token": token};
  })
});

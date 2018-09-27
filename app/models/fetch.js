import DS from 'ember-data';
// import attr from '/ember-data/attr';
const {attr} = DS;
export default DS.Model.extend({
    title: attr('string')
});

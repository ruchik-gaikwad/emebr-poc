import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com',
    namespace: '/posts',

    buildURL() {
        // debugger
        return this.host+this.namespace;
    }
    
});

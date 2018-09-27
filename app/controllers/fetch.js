import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        sayHello(data) {
            debugger
            this.store.createRecord('fetch',{
                id: data.get('id'),
                title: data.get('title')
            }).save();
        }
    }
});

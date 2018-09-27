import Component from '@ember/component';

export default Component.extend({
    actions: {
        printHello(data){
            console.log(data)
            this.some_action(data)
        }
    }
});

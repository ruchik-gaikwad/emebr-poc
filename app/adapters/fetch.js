import DS from 'ember-data';
import Em from 'ember'

export default DS.RESTAdapter.extend({
    buildURL(){
        return 'http://localhost:3000/someRandom'
    },
    createRecord(store, type, snapshot)
    {
        let data = this.serialize(snapshot, {includeId:true});
        console.log(data, JSON.stringify(data));
        return new Promise((resolve, reject) => {
            Em.$.ajax({
                method: 'POST',
                url : 'http://localhost:3000/someRandom',
                contentType: 'application/json',
                processData: true,
                data: JSON.stringify(data),
                statusCode:{
                    201: () => {
                        debugger;
                        Em.run(null, resolve);
                        console.log(data);
                    },
                    200: ()=>{
                        Em.run(null,resolve);
                    }
                }

            })

            
        })
        
    }

});

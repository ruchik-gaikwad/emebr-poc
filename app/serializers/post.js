import DS from 'ember-data';
import post from '../adapters/post';

export default DS.RESTSerializer.extend({
    normalizeResponse(store,primaryModelClass,payload,id,requestType){
    payload = {
        post : payload
    }
    return this._super(store,primaryModelClass,payload,id,requestType)
    }
});

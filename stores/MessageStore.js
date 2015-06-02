import BaseStore from 'fluxible/addons/BaseStore';

export default class MessageStore extends BaseStore {
    static get storeName() {
        return 'MessageStore';
    }
    static get handlers() {
        return {
            'MESSAGE_ACTION': 'fooHandler'
        };
    }

    initialize() { // Set the initial state
        this._message = null;
    }

    fooHandler(payload) {
        this._message = payload;
    }

    get message() {
        return this._message;
    }
}
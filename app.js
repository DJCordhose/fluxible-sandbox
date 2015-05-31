import Fluxible from 'fluxible';
import React from 'react';
import {connectToStores, createStore, provideContext} from 'fluxible/addons';

const ACTION_NAME = 'MESSAGE_ACTION';

// Action
const action = (actionContext, payload) => {
    actionContext.dispatch(ACTION_NAME, payload);
};

// Store
const MessageStore = createStore({
    storeName: 'MessageStore',
    handlers: {
        [ACTION_NAME]: 'fooHandler'
    },
    initialize() { // Set the initial state
        this.message = null;
    },
    fooHandler(payload) {
        this.message = payload;
    },
    getState() {
        return {
            message: this.message
        };
    }
});

// Component
class App extends React.Component {
    render() {
        return <span>{this.props.message}</span>;
    }
}

App = provideContext(connectToStores(App, [MessageStore], (stores, props) => {
    return stores.MessageStore.getState();
}));

// App
const app = new Fluxible({
    component: App,
    stores: [MessageStore]
});

// Bootstrap
const context = app.createContext();
context.executeAction(action, 'Hello, World', err => {
    console.log(React.renderToString(context.createElement()));
});
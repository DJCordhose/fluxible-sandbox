// Derived from example at
// https://github.com/yahoo/fluxible

import Fluxible from 'fluxible';
import React from 'react';
import {connectToStores, provideContext} from 'fluxible/addons';

import HelloMessage from './components/HelloMessage';
import Html from './components/Html';

import MessageStore from './stores/MessageStore';

import action from './actions/messageAction';

//class App extends React.Component {
//    render() {
//        const content = <HelloMessage greeting={this.props.message} />;
//        //const state = null; // TODO
//        //return <Html markup={content} state={state}/>;
//        return content;
//    }
//}

const app = new Fluxible({
    component: provideContext(connectToStores(HelloMessage, [MessageStore], (stores, props) => {
        return {
            greeting: stores.MessageStore.message
        };
    })),
    stores: [MessageStore]
});

// Bootstrap
const context = app.createContext();
context.executeAction(action, 'Hello, World', err => {
    console.log(React.renderToString(context.createElement()));
});
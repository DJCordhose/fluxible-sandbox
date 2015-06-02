/*global document, window */

import Fluxible from 'fluxible';
import React from 'react';
import {connectToStores, provideContext} from 'fluxible/addons';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';

import HelloMessage from './components/HelloMessage';
import MessageStore from './stores/MessageStore';
import action from './actions/messageAction';

const app = new Fluxible({
    component: provideContext(connectToStores(HelloMessage, [MessageStore], (stores) => {
        return {
            greeting: stores.MessageStore.message
        };
    })),
    stores: [MessageStore]
});

const mountNode = document.getElementById('example');
const context = app.createContext();
context.executeAction(action, 'Hello', err => {
    React.render(context.createElement(), mountNode);
});

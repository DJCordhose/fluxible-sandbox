import React from 'react';
import {connectToStores, provideContext} from 'fluxible/addons';
import MessageStore from '../stores/MessageStore';
import action from '../actions/messageAction';
import MessageDisplay from './MessageDisplay';

class HelloMessage extends React.Component {
    static get contextTypes() {
        return {
            getStore: React.PropTypes.func.isRequired,
            executeAction: React.PropTypes.func.isRequired
        };
    }

    constructor(props) {
        super(props);
    }

    reset() {
        this._sendGreeting('');
        this.refs.in.getDOMNode().focus();
    }

    updateModel(event) {
        this._sendGreeting(event.target.value);
    }

    _sendGreeting(greeting) {
        this.context.executeAction(action, greeting);
    }

    render() {
        return (
            <div>
                <input ref="in"
                       onChange={this.updateModel.bind(this)}
                       value={this.props.greeting}/>
                <MessageDisplay message={this.props.greeting + ', World'}/>
                <button
                    onClick={this.reset.bind(this)}>Clear
                </button>
            </div>);
    }
}

export default provideContext(connectToStores(HelloMessage, [MessageStore], (stores) => {
    return {
        greeting: stores.MessageStore.message
    };
}));
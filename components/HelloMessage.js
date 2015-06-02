import React from 'react';
import MessageStore from '../stores/MessageStore';
import action from '../actions/messageAction';

export default class HelloMessage extends React.Component {
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
                   value={this.props.greeting} />
            <p>{this.props.greeting}, World</p>
            <button
                   onClick={this.reset.bind(this)}>Clear</button>
        </div>);
    }
}

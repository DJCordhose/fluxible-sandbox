import React from 'react';

export default class ResetButton extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.resetHandler}>Clear
            </button>
        );
    }
}

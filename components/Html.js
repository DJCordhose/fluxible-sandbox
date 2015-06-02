import React from 'react';

export default class Html extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>Hello, World</title>
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/js/main.js"></script>
            </html>
        );
    }
}

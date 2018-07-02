import React, { Component } from 'react';
import NavigationBar from './Navigation/NavigationBar';
import Content from './Content/Content';

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                
                <Content />
            </div>
        );
    }
}

export default App;
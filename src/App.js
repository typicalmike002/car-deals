import React from 'react';
import SearchControls from './SearchControls';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div class="jumbotron">
                    <h2>CarDeals</h2>
                    <p>Find the best Cars, with the best deals!</p>
                </div>
                <SearchControls />
            </div>
        )
    }
}

export default App;

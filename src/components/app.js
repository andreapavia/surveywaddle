import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <header className="header">
                    <div className="header__info info">
                        <img className="info__avatar" src="" alt="avatar"/>
                        <h5 className="info__heading">Hello!</h5>
                        <span className="info__subtext">under text</span>
                    </div>
                </header>
                <section class="content"></section>
            </div>
        )
    }
}

export default hot(module)(App);

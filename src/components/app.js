import React from 'react'
import { hot } from 'react-hot-loader'
import SVG from 'react-inlinesvg'

import AuthHelperMethods from '../helpers/Authentication'
import Avatar from '../assets/avatar.svg'

class App extends React.Component {
    state = {
        auth: new AuthHelperMethods()
    }
    componentDidMount() {
        // console.log(this.state.auth.loggedIn())

        // this.state.auth.login('username', 'password')
        // .then(res => {
        //     if (res === false) 
        //         return alert("Sorry those credentials don't exist!");
        // })
        // .catch(err => {
        //     alert(err);
        // });

        // console.log(this.state.auth.loggedIn())
    }
    render() {
        return (
            <div className="container">
                <header className="header">
                    <div className="header__info info">
                        <SVG 
                            src={Avatar}
                        />
                        <h5 className="info__heading">Hello!</h5>
                        <span className="info__subtext">under text</span>
                    </div>
                </header>
                <section className="content"></section>
            </div>
        )
    }
}

export default hot(module)(App);

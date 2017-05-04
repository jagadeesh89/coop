import React from 'react';

export class Login extends React.Component {

    login(){
        fetch('/api/login').then((res) => {
            console.log(res);
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.login()}>Login with CA</button>
            </div>
        );
    }    
}
import React from 'react';
import Navbar from './../general/Navbar.js';
import API from '../../Utilities/API.js';

export class Main extends React.Component {

    constructor(){
        super();

        this.state = {};
    }

    query(){
        this.setState({
            loading: true
        });
        API.initiatives().then((res) => {
            if(res.ok){
                res.json().then((json) => {
                    console.log(json);
                    this.setState({
                        queryResult: json,
                        loading:false
                    });
                });
            } else {
                res.text().then((text) => {
                    console.log(text);
                });
                this.setState({
                    queryResult: undefined,
                    loading:false
                });
            }
        });
    }

    getChildren(obj){
        this.setState({
            loading: true
        });
        API.initiativeChildren(obj.FormattedID).then((res) => {
            if(res.ok){
                res.json().then((json) => {
                    console.log(json);
                    this.setState({
                        queryResult: json,
                        loading:false
                    });
                });
            } else {
                res.text().then((text) => {
                    console.log(text);
                });
                this.setState({
                    queryResult: undefined,
                    loading:false
                });
            }
        });
    }

    render() {
        var loadingBar = this.state.loading ? (
            <div className="progress">
                <div className="progress-bar progress-bar-striped active" style={{width:'100%'}}>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ) : undefined;

        var results;
        if(this.state.queryResult && ! this.state.loading){
            results = this.state.queryResult.map((obj, index) => {
                return (
                    <div key={obj._ref}>
                        {obj.FormattedID}: {obj.Name} ({obj._type})
                        <button onClick={()=> this.getChildren(obj)} className="btn btn-info">
                            Find Children
                        </button>
                    </div>
                )
            });
        }
        
        return (
            <div>
                <Navbar />
                <div>
                    <button className="btn btn-primary" onClick={() => this.query()}>Query</button>
                </div>
                {loadingBar}
                {results}
            </div>  
        );
    }
}


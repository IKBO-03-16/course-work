import React from 'react';
class Titles extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.maintainer}</p>
            </div>
        );
    }
};

export default Titles;
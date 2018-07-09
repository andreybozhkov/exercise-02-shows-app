import React, {Component} from 'react';
import Image from './Image';

export default class Character extends Component {
    constructor(props){
        super(props);

        this.state = {
            charOnFocus: {}
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.targetChar !== prevProps.targetChar) {
            if (this.props.targetChar !== undefined && this.props.targetChar !== null) {
                fetch('http://localhost:9999/character/' + this.props.targetChar)
                    .then(data => {
                        return data.json();
                    })
                    .then(parsedData => {
                        this.setState({ charOnFocus: parsedData });
                    });
            }
        }
    }

    render() {
        return(
            <div>
                <Image
                    imageUrl={this.state.charOnFocus.url}
                    key={this.state.charOnFocus.id}
                    altName={this.state.charOnFocus.name}
                    childOfChar={true}
                />
                <p>Name: {this.state.charOnFocus.name}</p>
                <p>Bio: {this.state.charOnFocus.bio}</p>
            </div>
        )
    }
}
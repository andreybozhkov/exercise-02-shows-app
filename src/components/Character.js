import React, {Component} from 'react';
import Image from './Image';

export default class Character extends Component {
    constructor(props){
        super(props);

        this.state = {
            charOnFocus: {}
        };
    }

    componentWillReceiveProps() {
        console.log(this.props.targetChar);
        /*fetch('http://localhost:9999/character/' + this.props.targetChar)
            .then(data => {
                return data.json();
            })
            .then(parsedData => {
                console.log(parsedData);
                //this.setState({ charOnFocus: parsedData });
            });*/
    }

    render() {
        return(
            <div>
                <Image
                    imageUrl={this.state.charOnFocus.url}
                    key={this.state.charOnFocus.id}
                    altName={this.state.charOnFocus.name}
                />
                Name: {this.state.charOnFocus.name}
                Bio: {this.state.charOnFocus.bio}
            </div>
        )
    }
}
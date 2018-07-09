import React, {Component} from 'react';

export default class Image extends Component {
    constructor(props){
        super(props);

        this.state = {
            imageUrl: this.props.imageUrl,
            altName: this.props.altName,
            id: this.props.id,
            childOfChar: false
        };

        this.passCharIdToParent = this.passCharIdToParent.bind(this);
    }

    passCharIdToParent(event) {
        if (this.props.childOfChar === true) {
            this.setState({ childOfChar: true });
        }
        else {
            this.props.passCharIdToParent(event.target.id);
        }
    }

    render() {
        return(
            <div>
                <img
                    src={this.state.imageUrl}
                    alt={this.state.altName}
                    id={this.state.id}
                    onClick={this.passCharIdToParent}
                />
            </div>
        )
    }
}
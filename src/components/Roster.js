import React, {Component} from 'react';
import Image from '../components/Image';

class Roster extends Component {
    constructor(){
        super();

        this.state = {
            characters: []
        };

        this.passCharIdToParent = this.passCharIdToParent.bind(this);
    }

    passCharIdToParent(id) {
        this.props.setCharOnFocus(id);
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster')
            .then(data => {
                return data.json()
            })
            .then(parsedData => {
                this.setState({ characters: parsedData });
            })
    }

    render() {
        return(
            <section>
                {this.state.characters.map((character) => (
                    <Image
                        imageUrl={character.url}
                        key={character.id}
                        id={character.id}
                        altName={character.name}
                        passCharIdToParent={this.passCharIdToParent}
                    />
                ))}
            </section>
        )
    }
}

export default Roster;
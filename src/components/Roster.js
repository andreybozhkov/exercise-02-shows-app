import React, {Component} from 'react';

class Roster extends Component {
    constructor(){
        super();

        this.state = {
            characters: []
        };
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
                    <div key={character.id}>
                        <img src={character.url} alt={character.name}/>
                    </div>
                    ))}
            </section>
        )
    }
}

export default Roster;
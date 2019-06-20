import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'shards-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { basename } from 'path';

class CharacterList extends Component {
    state = {
        characters: [
            { id: uuid(), name: 'Sez' , level: 60, power: 30000 },
            { id: uuid(), name: 'Angelica' , level: 50, power: 16000},
            { id: uuid(), name: 'Luluca' , level: 50, power: 20000},
            { id: uuid(), name: 'Dizzy' , level: 60, power: 30000}

        ]
    }

    render(){
        //Pull out items from this.state items
        const { characters } = this.state;
        return(
            <Container>
                <Button 
                color="dark" 
                style={{marginBottom: '2rem', marginTop: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter character name');
                    const level = prompt('Enter character level');
                    const power = prompt('Enter character power');
                
                    if(name && level && power){
                        this.setState(state => ({
                            characters: [...state.characters, { id: uuid(), name, level, power }]
                        }));
                    }
                }}
                >
                Add Character
                </Button>

                <ListGroup>
                    <TransitionGroup className = "character-list">
                        {characters.map(({ id, name, level, power }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {name}, {power}
                                    <Button
                                    className="remove-btn float-right"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({ 
                                            characters: state.characters.filter(character => character.id !== id)
                                        }));
                                    }}
                                    >&times;
                                    </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }

}

export default CharacterList;
import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'shards-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCharacters, deleteCharacter, viewCharacter } from '../actions/characterActions';
import PropTypes from 'prop-types';
import { basename } from 'path';

class CharacterList extends Component {

    componentDidMount(){
        this.props.getCharacters();
    }

    onDeleteClick = (id) => {
        this.props.deleteCharacter(id);
    }

    onViewClick = (id) => {
        this.props.viewCharacter(id);
    }

    render(){
        const { characters } = this.props.character;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className = "character-list">
                        {characters.map(({ _id, name, level, power }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {name}, {power}
                                    {/* <Button
                                    className="float-right"
                                    size="sm"
                                    onClick={this.onViewClick.bind(this, id)}
                                    >View
                                    </Button> */}
                                    <Button
                                    className="float-right"
                                    theme="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
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

CharacterList.propTypes = {
    getCharacters: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.character
});

export default connect(mapStateToProps, { getCharacters, deleteCharacter, viewCharacter })(CharacterList);
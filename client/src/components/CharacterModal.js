import React, { Component } from 'react';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    FormInput
} from 'shards-react';
import { connect } from 'react-redux';
import { addCharacter } from '../actions/characterActions';

class CharacterModal extends Component{
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
      }

    state = {
        modal: false,
        name: '',
        level: 0,
        power: 0
    }

    toggle() {
        this.setState({
        open: !this.state.open
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.level]: e.target.value });
        this.setState({ [e.target.poweer]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newCharacter = {
            name: this.state.name,
            level: this.state.level,
            power: this.state.power
        }

        //Add character via addCharacter action
        this.props.addCharacter(newCharacter);

        //Close the modal
        this.toggle();

    }

    render(){
        const { open } = this.state;
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem', marginTop: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Character
                </Button>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Character List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <label for="character">Character Information</label>
                                <FormInput
                                type = "text"
                                name = "name"
                                id = "nameInput"
                                placeholder = "Add Character Name"
                                onChange={this.onChange}
                                />
                                <FormInput
                                type = "number"
                                name = "level"
                                id = "levelInput"
                                placeholder = "Add Character Level"
                                onChange={this.onChange}
                                />
                                <FormInput
                                type = "number"
                                name = "power"
                                id = "powerInput"
                                placeholder = "Add Character Power"
                                onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Character</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    character: state.character
});

export default connect(mapStateToProps, { addCharacter })(CharacterModal);
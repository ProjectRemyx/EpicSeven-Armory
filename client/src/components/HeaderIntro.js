import React, { Component } from 'react';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";

export default class HeaderIntro extends Component{
    render(){
        return(
            <div className="header-background">
                <Container className="header-container">
                    <Row>
                        <Col className="header-text">
                        <h1>Jing's Epic Seven Armory</h1>
                            <p>
                            <br/>
                            Welcome to my armory! Here you'll find what my team and character collection looks like.
                            This site uses React for front-end and MongoDb, Express and Node.js for back-end (MERN).
                            This is a site created to learn MERN, I do not own Epic Seven or any of the media presented 
                            on this page.
                            </p>
                        </Col>
                        <Col>
                            <img src={require('../imgs/sez2.png')} alt="Epic Seven Character" style={{height: '400px'}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}



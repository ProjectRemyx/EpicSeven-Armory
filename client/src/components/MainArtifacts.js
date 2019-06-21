import React from "react";
import { Card, CardBody, CardImg } from "shards-react";
import ScrollableAnchor from 'react-scrollable-anchor';

export default function ArtifactCard() {
  return (
    <div className="main-artifact-background">
        <div className="main-artifact-background-overlay">
            <ScrollableAnchor id={'artifactSection'}>
            <h2>Main Artifacts</h2>
            </ScrollableAnchor>
            <img src={require('../imgs/divider.png')} alt="Divider" style={{width: '30%'}}/> 
            <div className="main-artifact-container">     
                <div className="main-artifact-card">
                    <Card style={{ maxWidth: '400px' }}>
                        <CardImg top src={require('../imgs/scythe.png')} alt="Sigurd Scythe" />
                        <CardBody>
                        <p>
                            Sigret uses Sigurd Scythe. When the caster's health is less than 50%,
                            it increases attack by 25% and absorbs 25% of the damage dealt as health.
                        </p>
                        </CardBody>
                    </Card>
                </div>  
                <div className="main-artifact-card">
                    <Card style={{ maxWidth: '400px' }}>
                        <CardImg top src={require('../imgs/spiritsbreath.png')} alt="Spirit's Breath" />
                        <CardBody>
                        <p>
                            Luluca uses Spirit's Breath. This artifact has a 50% chance to decrease skill
                            cooldown by 1 turn when using a non-attack skill. 
                        </p>
                        </CardBody>
                    </Card>
                </div>  
                <div className="main-artifact-card">
                    <Card style={{ maxWidth: '400px' }}>
                        <CardImg top src={require('../imgs/joker.png')} alt="Daydream Joker" />
                        <CardBody>
                        <p>
                            Chaos Sect axe uses Daydream Joker. This artifact does extra damage equivalent
                            to 1.5% of the enemy's max health when attacking.
                        </p>
                        </CardBody>
                    </Card>
                </div>  
                <div className="main-artifact-card">
                    <Card style={{ maxWidth: '400px' }}>
                        <CardImg top src={require('../imgs/rod.png')} alt="Rod of Amaryllis" />
                        <CardBody>
                        <p>
                            Angelica uses the Rod of Amaryllis. This artifact heals an ally with the lowest
                            health by 12% when using a non-attack skill. 
                        </p>
                        </CardBody>
                    </Card>
                </div>  
            </div>
        </div>
    </div>
  );
}

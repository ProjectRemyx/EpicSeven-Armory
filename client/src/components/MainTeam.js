import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody
} from "shards-react";

export default function CharacterCard() {
  return (
    <div className="main-team-background">
        <ScrollableAnchor id={'teamSection'}>
        <h2>Main Team</h2>
        </ScrollableAnchor>
        <img src={require('../imgs/divider.png')} alt="Divider" style={{width: '30%'}}/>        
        <div className="main-team-container">
            <div className="main-team-card">
                <Card style={{ maxWidth: "300px"}}>
                    <CardHeader><img src={require('../imgs/6ice.png')} alt="6 Star Ice"/></CardHeader>
                    <CardImg src={require('../imgs/sigret.png')} alt="Sigret" style={{height: '350px'}}/>
                    <CardBody>
                        <CardTitle>Sigret</CardTitle>
                        <p>
                            Sigret is my primary damage dealer for Wyvern 11 and also my go to for PvP. 
                            Her debuffs make her a great choice for both, not to mention the fact that
                            she has a cool scythe! I am currently building her with attack and critical 
                            set pieces.
                        </p>
                        <img src={require('../imgs/ATK.png')} alt="Attack Set"/>
                        /
                        <img src={require('../imgs/CRIT.png')} alt="Crit Set"/>
                    </CardBody>
                </Card>
            </div>
            <div className="main-team-card">
                <Card style={{ maxWidth: "350px" }}>
                    <CardHeader><img src={require('../imgs/5ice.png')} alt="5 Star Ice"/></CardHeader>
                    <CardImg src={require('../imgs/luluca.png')} alt="Luluca" style={{height: '350px'}}/>
                    <CardBody>
                        <CardTitle>Luluca</CardTitle>
                        <p>
                            Luluca is my support unit who serves a big role as utility. 
                            Her team shields and defense break debuff make her a great addition to the team.
                            She is currently using attack and critical set pieces to do an extra bit of damage.
                        </p>
                        <img src={require('../imgs/ATK.png')} alt="Attack Set"/>
                        /
                        <img src={require('../imgs/CRIT.png')} alt="Crit Set"/>
                    </CardBody>
                </Card>
            </div>
            <div className="main-team-card">
                <Card style={{ maxWidth: "350px" }}>
                    <CardHeader><img src={require('../imgs/6dark.png')} alt="6 Star Dark"/></CardHeader>
                    <CardImg src={require('../imgs/axe.png')} alt="Chaos Sect Axe" style={{height: '350px'}}/>
                    <CardBody>
                        <CardTitle>Chaos Sect Axe</CardTitle>
                        <p>
                            Chaos Sect Axe is my secondary damage dealer who has debuffs and defense break capabilities. 
                            Although he is slow, he hits hard and has built in lifesteal for sustain. He is currently 
                            wearing attack and critical set pieces.
                        </p>
                        <img src={require('../imgs/ATK.png')} alt="Attack Set"/>
                        /
                        <img src={require('../imgs/CRIT.png')} alt="Crit Set"/>
                    </CardBody>
                </Card>
            </div>
            <div className="main-team-card">
                <Card style={{ maxWidth: "350px" }}>
                    <CardHeader><img src={require('../imgs/5ice.png')} alt="5 Star Ice"/></CardHeader>
                    <CardImg src={require('../imgs/angelica.png')} alt="Angelica" style={{height: '350px'}}/>
                    <CardBody>
                        <CardTitle>Angelica</CardTitle>
                        <p>
                            Angelica is my healer and my tank. She is such a versatile unit that is a staple for the team.
                            Since she is both a healer and a tank, I can add in an extra slot for damage which is why I can
                            fit Chaos Sect Axe into my team. 
                        </p>
                        <img src={require('../imgs/speed.png')} alt="Speed Set"/>
                        /
                        <img src={require('../imgs/hp.png')} alt="Health Set"/>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
  );
}

import React, { Component } from 'react';
import PlayerCard from '../UI/playerCard';
import Fade from 'react-reveal/Fade';

import Stripes from '../../Resources/images/stripes.png';
import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../UI/misc';
import { Promise } from 'core-js';

export default class TheTeam extends Component {

    state = {
        loading: true,
        players: []
    }

    componentDidMount() {
        firebasePlayers.once('value').then(snapshot => {
            const players = firebaseLooper(snapshot)
            const promises = [];

            for (let key in players) {
                promises.push(
                    new Promise((resolve, reject) => {
                        firebase.storage().ref('players')
                        .child(players[key].image).getDownloadURL()
                        .then( url => {
                            players[key].url = url;
                            resolve();
                        })
                    })
                )
            }

            Promise.all(promises).then(() => {
                this.setState({
                    loading: false,
                    players
                })
            })
        
        })
    }

    showplayersByCategory = (category) => (
        this.state.players ?
            this.state.players.map((player,i)=>{
                return player.position === category ?
                    <Fade left delay={i*40} key={i}>
                        <div className="item">
                            <PlayerCard
                                number={player.number}
                                name={player.name}
                                lastname={player.lastname}
                                bck={player.url}
                            />
                        </div>
                    </Fade>
                : null
            })
        : null
    )

    render() {
        return (
            <div className="the_team_container"
                style={{
                    background:`url(${Stripes}) repeat`
                }}
            >
                { !this.state.loading ?
                    <div>
                        <div className="team_category_wrapper">
                            <div className="title">
                                Goalkeepers
                            </div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Goalkeeper')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">
                                Defenders
                            </div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Defender')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">
                                Midfielders
                            </div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Midfielder')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">
                                Attackers
                            </div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Attacker')}
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}

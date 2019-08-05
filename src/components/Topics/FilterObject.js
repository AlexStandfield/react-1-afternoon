import React from 'react'

class FilterObject extends React.Component {
    constructor(){
        super()

        this.state = {
            players: [
                { 
                    name: 'Tom Brady',
                    number: 12,
                    team: 'Patriots',
                    position: 'Quarterback'
                },
                 {
                    name: 'Aaron Donald',
                    number: 99,
                    team: 'Rams',
                    action: 'tackling'
                },
                {
                    name: 'Odell Beckham Jr.',
                    number: 13,
                    team: 'Browns',
                    signiture: 'one handed catch'
                }
            ],
            userInput: '',
            filteredPlayers: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterPlayers(prop){
        let players = this.state.players
        let filteredPlayers = []

        for (let i = 0; i < players.length; i++){
            if (players[i].hasOwnProperty(prop)){
                filteredPlayers.push(players[i])
            }
        }
        this.setState({filteredPlayers: filteredPlayers})
    }

    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Players: {JSON.stringify(this.state.players, null, 10)} </span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={ () => this.filterPlayers(this.state.userInput)} >Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredPlayers, null, 10)} </span>
            </div>
        )
    }
}

export default FilterObject
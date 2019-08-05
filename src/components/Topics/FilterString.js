import React from 'react'

class FilterString extends React.Component {
    constructor(){
        super()
        this.state = {
        saying: ['Tom', 'Brady', 'is', 'the', 'GOAT'],
        userInput: '',
        filteredArray: []
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }

    filterArray(){
        let saying = this.state.saying
        let filteredArray = []

        for(let i = 0; i < saying.length; i++){
            if (saying[i].includes(this.state.userInput)){
                filteredArray.push(saying[i])
            }
        }
        this.setState({filteredArray: filteredArray})
    }


    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Saying: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confimationButton' onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString
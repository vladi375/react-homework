import React from 'react';

class Player extends React.Component {

    state = {
        value: "≧",
    }

    changePlayer = () => {
        this.setState({ value: this.state.value === "≧" ? "≩" : 
        this.state.value === "≩" ? "≹" : "≧"})        
    }

    render () {
        return (
            <div style={{ fontWeight: "bold", fontSize: 32 }} onClick={this.changePlayer}>{this.state.value}</div>
        )
    }
}

export default Player;
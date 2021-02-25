import React from 'react';
import './styles.css';

class Ex2 extends React.Component {

    state = {
      italic: false
    };

    setItalic = () => {
      this.setState({italic: true});
    }

    setRegular = () => {
      this.setState({italic: false});
    }
  
    changeStyle = () => {
      !this.state.italic ? this.setItalic() : this.setRegular();
    }

    render() {
      return (
        <p className={this.state.italic ? "text" : ""} onClick={this.changeStyle}> lorem ipsum </p>
        )
    }
}

export default Ex2;
import React from 'react';
import './styles.css';

class Menu extends React.Component {
    state = {
        list: false,
    }

    openList = () => {
        this.setState({ list: !this.state.list })
    }

    render() {
        return ( this.state.list ? <div className="list"><button onClick={this.openList}>Закрыть</button><ul><Option name="Главная"/><Option name="Контакты"/>
            <Option name="Доставка"/><Option name="Оплата"/></ul></div> : <div className="list"><button onClick={this.openList}>Меню</button></div>
        )
    }
}

class Option extends React.Component {
    
    render() {
        return(
            <li>{this.props.name}</li>
        )
    }
}

export default Menu;
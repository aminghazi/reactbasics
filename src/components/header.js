import React, { Component } from 'react';
import { css } from 'glamor';


let search = css({
    padding: "10px",
    margin: "15px 0",
    width: "290px",
})

class Header extends Component {

    state = {
        active: false,
        // keywords: '',
    }

    // inputChange(event) {
        // // const value = event.target.value === '' ? false : true;
    //     const value = event.target.value === '' ? 'active' : 'non-active';
    //     this.setState({
    //         active: value,
    //         keywords: event.target.value
    //     })
    // }

    render() {

        // let style = { background: 'red' }

        // if(this.state.keywords !== '') {
        //     style.background = 'red'
        // } else {
        //     style.background = 'blue'
        // }

        return (
            <header
                // className={ this.state.active }
                // style={{ background : `${this.state.active? 'red' : 'orange'}` }}
                >
                <div>Logo</div>
                <input 
                    className={`${search}`}
                    onChange={ this.props.keywords }
                />
            </header>
        )
    }
}

export default Header;
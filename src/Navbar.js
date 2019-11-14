import React from 'react'

class Navbar extends React.Component {
    render() {
        return(
        <div>
            <h1>I am a {this.props.tech}</h1>
        </div>
        
        )
    }
}


export default Navbar;
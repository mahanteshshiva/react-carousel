import React from 'react'


class Carousel extends React.Component {

    render() {
        return (
            <div>
                 <u><h3>Social Media</h3></u>
            <div className="flex-container">
                <div className="slide-1 facebook"><a href="https://www.facebook.com">Facebook</a></div>
                <div className="slide-2 twitter"><a href="https://twitter.com/?lang=en">Twitter</a></div>
                <div className="slide-3 linkedIn"><a href="https://www.linkedin.com/">LinkedIn</a></div>
                <div className="slide-4 gmail"><a href="https://www.google.com/gmail/about/">Gmail</a></div>
                <div className="slide-4 github"><a href="https://github.com/">Github</a></div>
                <div className="slide-5 instagram"><a href="https://www.instagram.com/?hl=en">instagram</a></div>
            </div>
            <u><h3>Tech Course</h3></u>
            <div className="flex-container">
            <div className="slide-1 w3school"><a href="https://www.w3schools.com/">W3schools</a></div>
            <div className="slide-2 udemy"><a href="https://www.udemy.com">Udemy</a></div>
            <div className="slide-3 angular"><a href="https://angular.io">Angular</a></div>
            <div className="slide-4 react"><a href="https://reactjs.org">Reactjs</a></div>
            <div className="slide-4 bootstrap"><a href="https://getbootstrap.com">Bootstrap</a></div>
            <div className="slide-5 googlefonts"><a href="https://fonts.google.com">Google Fonts</a></div>
        </div>
        </div>
        )
    }

}

export default Carousel;
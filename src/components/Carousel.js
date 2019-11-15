import React from 'react'


class Carousel extends React.Component {

    render() {
        return(
            <div className="flex-container">
                <div className="slide-1">Slide 1</div>
                <div className="slide-2">Slide 2</div>
                <div className="slide-3">Slide 3</div>
                <div className="slide-4">Slide 4</div>
                <div className="slide-4">Slide 5</div>
                <div className="slide-5">Slide 6</div>
            </div>
        )
    }

}

export default Carousel;
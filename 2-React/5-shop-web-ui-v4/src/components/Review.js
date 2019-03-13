import React, { Component } from 'react';

class Review extends Component {
    renderStars(n) {
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push(<i style={{ color: 'red', fontSize: '20px' }} className="fa fa-star" key={i}></i>)
        }
        return stars;
    }
    render() {
        // let review=this.props.value;
        //or
        let { value: review } = this.props;
        return (
            <div className="alert alert-info">
                {this.renderStars(review.stars)} &mdash; {review.author}
                <hr />
                <p>{review.body}</p>
            </div>
        );
    }
}

export default Review;
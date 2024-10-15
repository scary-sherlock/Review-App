
import { Component } from "react";
import './index.css'

class ReviewsCarousal extends Component {
    state = {
        activeReviewIndex: 0,
    }

    onLeftArrowClick = () => {
        this.setState(prevState =>
            ({ activeReviewIndex: prevState.activeReviewIndex === 0 ? 3 : prevState.activeReviewIndex - 1 })
        )
    }

    onRightArrowClick = () => {
        this.setState(prevState =>
            ({ activeReviewIndex: prevState.activeReviewIndex === 3 ? 0 : prevState.activeReviewIndex + 1 })
        )
    }

    render() {
        const { activeReviewIndex } = this.state
        const { reviewsList } = this.props
        const { imgUrl, username, companyName, description } = reviewsList[activeReviewIndex]
        return (
            <div className="reviews-carousel-container">
                <h1 className="reviews-heading">Reviews</h1>
                <div className="arrows-container">
                    <button
                        type="button"
                        className="arrow-button"
                        onClick={this.onLeftArrowClick}
                        data-testid="leftArrow"
                    >
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                            alt="left arrow"
                            className="arrow-image"
                        />
                    </button>
                    <div className="review-card">
                        <img src={imgUrl} alt={username} className="profile-image" />
                        <p className="username">{username}</p>
                        <p className="company-name">{companyName}</p>
                        <p className="description">{description}</p>
                    </div>
                    <button
                        type="button"
                        className="arrow-button"
                        onClick={this.onRightArrowClick}
                        data-testid="rightArrow"
                    >
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                            alt="right arrow"
                            className="arrow-image"
                        />
                    </button>
                </div>
            </div>
        )
    }
}

export default ReviewsCarousal
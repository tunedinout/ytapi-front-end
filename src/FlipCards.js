import FlipCard from "./FlipCard";
import React from "react";

class FlipCards extends Component {
  render() {
    const { flipCards } = this.props;
    return (
      <div>
        {flipCards.map(flipCard => (
          <FlipCard
            frontContent={flipCard.frontContent}
            backContent={flipCard.backContent}
          />
        ))}
      </div>
    );
  }
}

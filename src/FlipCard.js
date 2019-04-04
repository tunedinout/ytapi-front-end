import Flippy, { FrontSide, BackSide } from "react-flippy";
import React, { Component } from "react";

class FlipCard extends Component {
  render() {
    return (
      <div>
        <Flippy
          flipOnHover={true}
          flipOnClick={false}
          flipDirection="horizontal"
          style={{ width: "200px", height: "200px" }}
        >
          <FrontSide
            style={{
              backgroundColor: "#41669d"
            }}
            animationDuration={600}
          >
            {this.props.frontContent}
          </FrontSide>
          <BackSide style={{ backgroundColor: "#175852" }}>
            {this.props.backContent}
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default FlipCard;

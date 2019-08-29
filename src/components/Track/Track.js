import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }

  renderAction(isRemoval) {
    return isRemoval ? (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    ) : (
      <button className="Track-action">-</button>
    );
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;

import React from "react";

var BizCard = React.createClass({
  
  render() {
    const { name } = this.props;
    const { snippet } = this.props;
    const {img_url} = this.props;

    return (
      <div>
        <div class="row">
          <div class="col-md-4">
              <img class="biz-thumbnails" src={img_url} alt="" height="225" width="225"/>
          </div>
          <div class="col-md-8">
            <h4>{name}</h4>
            <p>{snippet}</p>
            <a class="btn btn-default" href="#">More Info</a>
          </div>
      </div>
      <div class="empty">
      </div>
    </div>
    );
  }
})


module.exports = BizCard;
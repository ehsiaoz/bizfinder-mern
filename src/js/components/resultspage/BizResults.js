import React from "react";

import BizCard from "./BizCard";


var BizResults = React.createClass({


  render() {
    console.log('bizresults props', this.props)
    var Businesses = this.props.business.map((biz, i) => <BizCard key={i} name={biz.name} snippet={biz.desc_notes} img_url={biz.img_url}/> );

    console.log("featured");
    return (
      <div>
          <div class="col-md-12">{Businesses}</div>
      </div>
    );
  }

}) 

  

module.exports = BizResults;

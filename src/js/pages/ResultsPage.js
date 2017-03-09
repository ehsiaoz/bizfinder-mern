import React from "react";

import BizResults from "../components/resultspage/BizResults";


var ResultsPage = React.createClass({
  getInitialState: function() {
    return {  
      business: [{
         "name": "Waldorf Astoria Chicago", 
         "street_address": "313 N Halsted", 
         "city": "Chicago", 
         "state": "IL", 
         "zipcode": 60642, 
         "img_url": "http://www.travelweekly.com/remote.jpg.ashx?width=360&height=379&scale=both&mode=crop&urlb64=aHR0cDovL250bXJlc2l6ZXIuYXp1cmVlZGdlLm5ldC9zaXplL0xhcmdlL2ltYWdlcy5udG1sbGMuY29tL0hvdGVsMi9UNDAvVDQwNjYyL0ZfVDQwNjYyX0VYVF9FNERCQUQ4NS5KUEc&hmac=CaXdA4IrPfk",
         "__v": 1, 
         "offers": 
          [ 
          "58b07e7b30ce4d02990071ae", 
          "58b0b07e1fbe6807e19843a6" 
          ], 
         "categories": [], 
         "desc_notes": ["Voted 2016 Reader's Choice 'Best U.S. Hotel' by Conde Naste, Waldorf Astoria Chicago offers Parisian-inspired elegance in downtown's prestigious Gold Coast neighborhood. An urban sanctuary, this luxury hotel boasts apartment-style rooms, an award-winning spa retreat and a bistro serving seasonal and artisanal cuisine. Situated in the stylish Gold Coast neighborhood of downtown Chicago, Waldorf Astoria Chicago offers easy access to all the city has to offer. Our collection of expansive guest rooms and suites feature private terraces and fireplaces - the perfect base for an unforgettable stay in Chicago."] },
      { 
        "name": "Four Season Hotel Chicago", 
        "street_address": "1923 Greenwood", 
        "city": "Evanston", 
        "state": "IL", 
        "zipcode": 60201, "__v": 0, 
        "img_url": "http://www.travelweekly.com/remote.jpg.ashx?width=360&height=379&scale=both&mode=crop&urlb64=aHR0cDovL250bXJlc2l6ZXIuYXp1cmVlZGdlLm5ldC9zaXplL0xhcmdlL2ltYWdlcy5udG1sbGMuY29tL0hvdGVsMi8wODIvMDgyNjAwL0ZfMDgyNjAwX0VYVF8yNkI5NDJGMC5KUEc&hmac=3hTzH4AKVCM",
        "offers": [], 
        "categories": [], 
        "desc_notes": ["Welcome to Four Seasons Hotel Chicago, located steps away from the famed Magnificent Mile, glamorous North Michigan Avenue shopping, and minutes from the city's business and financial centres. Explore the highest luxury guest rooms in the city with unrivaled Lake Michigan and skyline views. The award-winning Hotel has received a Forbes Five Star rating for 22 years in a row, the coveted AAA Five Diamond Award for 27 years, and is honored to be ranked as one of TripAdvisor's Top 25 Luxury Hotels in the United States."] }, 
      { 
        "name": "Hyatt Regency Chicago", 
        "street_address": "555 Main St", 
        "city": "Austin", 
        "state": "TX", 
        "zipcode": 60201,
        "img_url": "http://www.travelweekly.com/remote.jpg.ashx?width=360&height=379&scale=both&mode=crop&urlb64=aHR0cDovL250bXJlc2l6ZXIuYXp1cmVlZGdlLm5ldC9zaXplL0xhcmdlL3d3dy5jZm1lZGlhLnZmbWxlb25hcmRvLmNvbS9pbWFnZVJlcG8vMS8wLzExLzk3MS83MTIvMTA4MTQzMmNkbXNnYWxpbGVvdmZtX2ltZ19waG9fMDAwX25jX18xNTU4NDVfQ0ZTX0V4dGVyaW9yX0ouanBn&hmac=32fzAPPQXo0", 
        "__v": 0, 
        "offers": [], 
        "categories": [], 
        "desc_notes": ["Hyatt Regency Chicago offers a chic, downtown retreat located steps from the Magnificent Mile and iconic Chicago destinations. Slip away for an afternoon at the Art Institute of Chicago, ride on the Chicago Architectural Foundation’s boat tour, or snap a photo in front of Cloud Gate, locally known as the Bean. Whether you’re here on business or for a weekend getaway, savor the unparalleled views of downtown and Navy Pier when you stay at Hyatt Regency Chicago."] 
      }], 
    };
  },
  render() {
    let {business} = this.state;
    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    var category = this.props.params.category.capitalizeFirstLetter();
    var location = this.props.params.location.capitalizeFirstLetter();

    return (
      <div>
        <h1>{location} {category}</h1>
        <div class="row">
          <div class="col-lg-4">
            <ul class="list-group">
              <li class="list-group-item">
                <span class="badge">14</span>
                Chicago
              </li>
              <li class="list-group-item">
                <span class="badge">2</span>
                Boston
              </li>
              <li class="list-group-item">
                <span class="badge">1</span>
                Los Angeles
              </li>
            </ul>
          </div>
          <div class="col-lg-8">
            <BizResults business={business} drink="baja blast"/>
          </div>
        </div>
        
      </div>    
      
    );
  }

}) 

  

module.exports = ResultsPage;

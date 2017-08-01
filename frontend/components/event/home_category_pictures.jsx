import React from 'react';
import { Link } from 'react-router';


class HomeCategoryPictures extends React.Component{
  constructor(){
    super();
  }

  shouldComponentUpdate(){
    return false;
  }

  render(){
    return (
      <div className="category-pictures-outer">
        <div className="category-pictures-title">Browse by Categories</div>
          <div className="category-pictures-inner">

          </div>
      </div>
    );
  }
}



export default HomeCategoryPictures;


        //
        //
        //   <div className="category-pictures-outer-large">
        //     <Link to="/browse/sports">
        //       <div className="category-pictures-sports">
        //         <img className="sports-picture" src="https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490027070/bike_krrjre.jpg"/>
        //         <div className="category-pictures-sports-title">Sports</div>
        //         <span className="category-pictures-sports-description">
        //           Snowboard, Bike, Surf
        //         </span>
        //       </div>
        //     </Link>
        //   </div>
        //
        //   <div className="category-pictures-outer-small">
        //     <Link to="/browse/networking">
        //       <div className="category-pictures-networking">
        //         <img className="networking-picture" src="https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490027188/customers-business-320x220_aqbyeo.jpg"/>
        //         <div className="category-pictures-networking-title">Networking</div>
        //         <span className="category-pictures-networking-description">
        //           Business Mixers, Hobby Meetups, Panel Discussions
        //         </span>
        //       </div>
        //     </Link>
        //   </div>
        //
        //   <div className="category-pictures-outer-small">
        //     <Link to="/browse/classes">
        //       <div className="category-pictures-classes">
        //         <img className="classes-picture" src="https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490027253/yoga_mnod38.jpg" />
        //         <div className="category-pictures-classes-title">Classes</div>
        //         <span className="category-pictures-classes-description">
        //           Breakdance, Yoga, Fitness
        //         </span>
        //       </div>
        //     </Link>
        //   </div>
        //
        //   <div className="category-pictures-outer-small">
        //     <Link to="/browse/arts">
        //       <div className="category-pictures-arts">
        //         <img className="arts-picture" src="https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490027342/arts_pspxaz.jpg"/>
        //         <div className="category-pictures-arts-title">Arts</div>
        //         <span className="category-pictures-arts-description">
        //           Art Exhibitions, Comedy Nights, Plays
        //         </span>
        //       </div>
        //     </Link>
        //   </div>
        //
        //   <div className="category-pictures-outer-small">
        //     <Link to="/browse/parties">
        //       <div className="category-pictures-parties">
        //         <img className="parties-picture" src="https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490027398/parties_i3h49g.jpg" />
        //         <div className="category-pictures-parties-title">Parties</div>
        //         <span className="category-pictures-parties-description">
        //           Casual Nights Out, Happy Hours, Themed Parties
        //         </span>
        //       </div>
        //     </Link>
        //   </div>
        //
        //   <div className="category-pictures-outer-small">
        //     <Link to="/browse/music">
        //       <div className="category-pictures-music">
        //         <img className="music-picture" src="https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490027467/concert_oda7mm.jpg" />
        //         <div className="category-pictures-music-title">Music</div>
        //         <span className="category-pictures-music-description">
        //           Music Festivals, Dance Parties, Live Concerts
        //         </span>
        //       </div>
        //     </Link>
        //   </div>
        //
        //   <div className="category-pictures-outer-large">
        //     <Link to="/browse/food">
        //       <div className="category-pictures-food">
        //         <img className="food-picture" src="https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1490027518/food_xk1mzx.jpg"/>
        //         <div className="category-pictures-food-title">Food</div>
        //         <span className="category-pictures-food-description">
        //           Tastings, Food Challenges, Dinner Parties
        //         </span>
        //       </div>
        //     </Link>
        //   </div>
        //
        //

import React from 'react';
import ReactDOM from 'react-dom';

class Maintenance  extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return(
      <div className="maintenance">


      <article>
          <h1>We&rsquo;ll be back soon!</h1>
        <div>
            <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:mcevens.bienaime@gmail.com">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>

        </div>
      </article>
        </div>
    );
  }
}


export default Maintenance ;

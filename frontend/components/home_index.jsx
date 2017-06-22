import React from 'react';
import ReactDOM from 'react-dom';
import GlobalHeader from './global_header';

class HomeForm  extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    
    return(
      <section>
        <GlobalHeader headerOrigin="home_index" />

      </section>
    );
  }

}

export default HomeForm;

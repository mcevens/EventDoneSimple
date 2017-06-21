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
        <GlobalHeader />
        <h1>
          Here we go
        </h1>
      </section>

    );
  }

}

export default HomeForm;

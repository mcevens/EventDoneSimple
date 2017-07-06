import React from 'react';
import { connect} from 'react-redux';
import GlobalHeader from '../global_header';
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

class SelectTicket extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    return(
      <div>
        <div className="select-ticket-container">
          <div className="select-ticket-header">
              <h1>Register</h1>
          </div>
           <div className="select-ticket-content">
              <div className="select-ticket-items">
                 <div className="select-ticket-item">
                   <div className="select-ticket-info">
                       <h2>Ticket Name</h2>
                       <div>
                         <span>Ticket Price</span>
                       </div>
                   </div>
                   <div className="select-ticket-quantity">
                     <select>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                     </select>
                   </div>
                 </div>

              </div>
           </div>
           <div className="select-ticket-footer">
              <div className="select-ticket-other-info">
                <div>
                  <label>
                    QTY :
                  </label>
                  <label>
                    1
                  </label>
                </div>
                <div>
                  <label>
                    USD
                  </label>
                  <label>
                    "$22.09"
                  </label>
                </div>
              </div>
              <div className="select-ticket-action">
                 <button>
                    CHECKOUT
                 </button>
              </div>
           </div>
        </div>
      </div>
    );
  }

}

export default SelectTicket;

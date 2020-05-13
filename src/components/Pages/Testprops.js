import React, { useState, useEffect } from 'react'

// const Testprops = props => {
//     const [order_id,setOrder_id] = useState(props.order_id)
//     return(
//         <div>
//     sadsad {order_id}
//         </div>
//     )
// }


class Testprops extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        order_id: props.order_id,

      };
  }
  render(){
      return(
          <div>
              order_id = {this.state.order_id}
          </div>
      )
  }
}
  export default Testprops;


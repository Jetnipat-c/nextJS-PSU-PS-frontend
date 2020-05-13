import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import ReactToPrint from 'react-to-print'
import { useRouter } from 'next/router'
import styled from 'styled-components'
const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #fafafa;
  font: 12pt 'Tahoma';
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .page {
    width: 21cm;
    min-height: 29.7cm;
    padding: 1cm;
    margin: 1cm auto;
    border: 1px #d3d3d3 solid;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .subpage {
    padding: 1cm;

    height: 256mm;
  
  }

 

  @media print {
    .page {
      margin: 0;
      border: initial;
      border-radius: initial;
      width: initial;
      min-height: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always;
    }
  }
`

class ComponentToPrint extends React.Component {
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


const Example = props => {
  const componentRef = useRef()
  const [order_id,setOrder_id] = useState(props.order_id)
  console.log('Example or_id = ',order_id)
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint order_id={order_id} ref={componentRef} />
    </div>
  )
}
export default Example

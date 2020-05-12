import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { useRouter } from 'next/router'

const MyClassWithRouter = (props) => {
  const router = useRouter()
  return <MyClass {...props} router={router} />
}

class ComponentToPrint extends React.Component {
  constructor() {
    super()
    this.state = {
      history: [],
      order_id: props.router.query
    }
  }
  getform001byorder_id = async() => {
    console.log()
    const found = await axios.get(
      `http://localhost:3001/form001/findbyorder/${order_id}`
    )
    console.log('found = ', found.data)
    this.setState(JSON.parse(JSON.stringify(found.data)))
    console.log('history', history)
  }
  render() {
    return (
     <div>
         sadasdasd
     </div>
    );
  }
}
 
const Example = () => {
  const componentRef = useRef();
 
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
export default Example
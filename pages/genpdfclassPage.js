import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
 
class ComponentToPrint extends React.Component {
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
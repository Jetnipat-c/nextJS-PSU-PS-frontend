import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import ReactToPrint from 'react-to-print'
import { useRouter } from 'next/router'
import styled from 'styled-components'
const StyledWrapper = styled.div``
class ComponentToPrint extends React.Component {
  state = {
    users: []
  }

   componentDidMount () {
    axios.get('http://localhost:3001/form001/findbyorder/11').then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
  }

  //this.setState(JSON.parse(JSON.stringify(found.data)))
  render () {
    return (
      <div className="container">
      <div className="col-xs-8">
      <h1>React Axios Example</h1>
      {this.state.users.map((user) => (
        <div key={user} className="card">
         <div className="card-body">
             <h5 className="card-title">{user.order_id}</h5>
          </div>
        </div>
      ))}
      </div>
     </div>
    )
  }
}


const Example = () => {
  const componentRef = useRef()

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  )
}
export default Example

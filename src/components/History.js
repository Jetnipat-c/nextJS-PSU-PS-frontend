import react, { useState, useEffect } from 'react'
import * as axios from 'axios'
import { Button, Modal } from 'antd'
import styled from 'styled-components'
import Postcard from './Postcard'
const StyledWarpper = styled.div``

const History = () => {
  const [history, setHistoty] = useState([])
  const [visible, setVisible] = useState(false)
  const showModal = () => {
    setVisible(true)
  }
  const handleOk = e => {
    setVisible(false)
  }
  const handleCancel = e => {
    setVisible(false)
  }
  useEffect(() => {
    getForm001Bysid()
  }, [])
  const getForm001Bysid = async () => {
    var found = await axios.get(
      `http://localhost:3001/form001/${sessionStorage.getItem('username')}`
    )
    console.log('found = ', found.data)
    setHistoty(JSON.parse(JSON.stringify(found.data)))
  }
  return (
    <StyledWarpper>
      <h1>History</h1>
      <div>
        {history.map((data, index) => {
          return (
            <div>
              date : {data.date}
              <Button type='primary' onClick={showModal} style={{ margin: '10px' }}>
                View
              </Button>
            </div>
          )
        })}
      </div>
      <div>
        <Modal
          title='Detial of date'
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            {history.map((data, index) => {
              return <Postcard key={index} data={data}></Postcard>
            })}
          </div>
        </Modal>
      </div>
    </StyledWarpper>
  )
}
export default History

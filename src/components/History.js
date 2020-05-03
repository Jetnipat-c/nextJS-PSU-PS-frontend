import react,{ useState,useEffect} from 'react'
import * as axios from 'axios'

import styled from 'styled-components'
import Postcard from './Postcard'
const StyledWarpper = styled.div`

`

const History = () =>{
    const [history,setHistoty] = useState([])
    useEffect(()=>{
        getForm001Bysid()
    },[])
    const getForm001Bysid = async () => {
        var found = await axios.get(
            `http://localhost:3001/form001/${sessionStorage.getItem('username')}`
            )
        console.log('found = ',found.data)
        setHistoty(JSON.parse(JSON.stringify(found.data)))
        
    }
    return(
        <StyledWarpper>
        <h1>History</h1>
        <div>
             {
            history.map((data,index)=>{
                return(
                    <Postcard  key = {index}
                        data = {data}>
                       
                    </Postcard>
                )
            }) 
            }
        </div>
       
       
        </StyledWarpper>
    )
}
export default History
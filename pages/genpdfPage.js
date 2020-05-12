import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Router, Route, Link } from 'react-router'
import { useRouter } from 'next/router'
import styled from 'styled-components'
const StyledWrapper = styled.div`

`

const genpdfPage = props => {
    const router = useRouter()
    const { order_id } = router.query
    console.log(order_id)

    const getform001byorder_id = async() => {
        const result = await axios.get(
            `http://localhost:3001/form001/findbyorder/${order_id}`
          )
          console.log('result = ', result.data)
          //setHistoty(JSON.parse(JSON.stringify(result.data)))
    }

    useEffect(()=>{
        getform001byorder_id()
    },[])
    return(
        <StyledWrapper>
                genpdfPage
        </StyledWrapper>
    )
}
export default genpdfPage

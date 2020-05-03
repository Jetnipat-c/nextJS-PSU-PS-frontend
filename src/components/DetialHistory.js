import styled from 'styled-components'
const StyledWrapper = styled.div`

`
const DetialHistory = (props) =>{
    const {sid,loca,date} = props.data
    return(
        <StyledWrapper>
                <div>
              <p> sid : {sid}   loca :  {loca}  </p>
            </div>
        </StyledWrapper>
    )
}
export default DetialHistory
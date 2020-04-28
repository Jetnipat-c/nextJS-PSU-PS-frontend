import WithAuth from '../src/hoc/withAuth'
import MainPage from './main'
const Mainpage_test = () =>{
    return(
        <WithAuth component={MainPage}/>
    )
}

export default Mainpage_test
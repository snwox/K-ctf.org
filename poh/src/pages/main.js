import './main.css'
import styled from 'styled-components'
import { TopButton } from '../components'

const LoginBtn=styled.div`
    background:pink;
`
const LogoutBtn=styled.div`
    background:black;
`
const Main = () => {
    
    return(
        <div>
            <TopButton />
            <LoginBtn>로그잉잉</LoginBtn>
            <div>
                <div>
                    topbars and button
                </div>
                <div>
                    contents
                </div>
            </div>
            <LogoutBtn>로그아웃</LogoutBtn>
        </div>
    )
}
export default Main
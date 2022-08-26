import styled, {css} from 'styled-components/native';
import {Header, Contents, Footer}from './components/Layout';

const Main = styled.View`
    flex:1;
    background-color: yellow;
`;

const styledHeader = {
    flex:0.3,
    bgColor: '#f00',
    color: '#fff'
}
const styledContents = {
    flex:1,
    bgColor: '#0f0',
    color: '#fff'
}
const styledFooter = {
    flex:0.1,
    bgColor: '#00f',
    color: '#fff'
}

const App =() => {
    return (
        <Main>
            <Header style={styledHeader} />
            <Contents style={styledContents} />
            <Footer style={styledFooter}/>
        </Main>
    );
}

export default App;
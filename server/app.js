/**
 * Created by So on 2018/4/3.
 */
const Koa = require('koa');
const ejs = require('ejs');
const ReactDOMServer = require('react-dom/server');
const styled = require('styled-components').default
const css = require('styled-components').css
const ServerStyleSheet = require('styled-components').ServerStyleSheet
const React = require('react');
const app = new Koa();
const Box = styled.div`
background: #666;
`
const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid #999;
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`
const Main = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid #999;
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
function Welcome(props) {
  return (
    <Box>
      <Button primary> Hello</Button>
      <Button > Hello</Button>
      <Main > Main</Main>
      <Main > Main</Main>
      <Main > Main</Main>
      <Wrapper>
        <Main > Main</Main>
        <Main > Main</Main>
      </Wrapper>
      <Title>
        <Main > Main</Main>
        <Main > Main</Main>
      </Title>
    </Box>
  )
}

app.use(async ctx => {
  console.time('ServerStyleSheet')
  const sheet = new ServerStyleSheet()
  console.timeEnd('ServerStyleSheet')
  let html= ReactDOMServer.renderToString(sheet.collectStyles(<Welcome />))
  const styleTags = sheet.getStyleTags()
  ctx.body =await ejs.renderFile('./server/view/index.ejs', {style:styleTags,html})
});

app.listen(3000);
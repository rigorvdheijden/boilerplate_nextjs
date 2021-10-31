import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Roboto', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(---black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'Roboto', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  }
`;

const StyledMain = styled.main`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </div>
  );
}

export default Page;

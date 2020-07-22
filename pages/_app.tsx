import * as React from 'react';
import App from 'next/app';
import styled from '@emotion/styled';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import {ThemeProvider} from '@material-ui/styles';
import {Container, CssBaseline} from '@material-ui/core';
import {ExplorerDefault} from '../src/theme/ExplorerDefault';
import {createReduxStore} from '../src/redux/store';
import {colors} from '../src/theme/variables';
import {Header} from '../src/common/components/Header';
import {StickyFooter} from '../src/common/components/StickyFooter';
import Navbar from '../src/common/components/Navbar';
import NavbarContent from '../src/common/components/Navbar/NavbarContent.json';

const HeaderContainer = styled(Container)`
  &&.MuiContainer-root {
    background-color: ${colors.skyblue};
  }
`;
const ContentContainer = styled(Container)`
  &&.MuiContainer-root {
    background-color: ${colors.seaBlue};
    padding: 12px 55px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
const NavbarContainer = styled(Container)`
  &&.MuiContainer-root {
    padding: 0px 0px;
  }
`;
const FooterContainer = styled(Container)`
  &&.MuiContainer-root {
    padding: 0px 0px;
  }
`;

class ExplorerApp extends App<{pageProps: any; store: Store}> {
  constructor(props: any) {
    super(props);
    this.transitionDuration = parseInt(process.env.transitionDuration || '0', 10);
  }

  transitionDuration: number;

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

  }

  render() {
    const {Component, pageProps, store} = this.props;

    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={ExplorerDefault}>
            <CssBaseline />
            <HeaderContainer maxWidth="xl">
              <Header />
            </HeaderContainer>
            <NavbarContainer maxWidth="xl">
              <Navbar content={NavbarContent}/>
            </NavbarContainer>
            <ContentContainer maxWidth="xl">
              <Component {...pageProps} />
            </ContentContainer>
            <FooterContainer maxWidth="xl">
              <StickyFooter />
            </FooterContainer>            
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

// Add some Next.js wrappers to make server-side rendering less painful with redux/redux saga:
//   - withRedux:    Takes care of serializing the redux store on the server and deserializing on the client.  This way
//                   whatever state you add on the server will automatically be available on the client.
//                   https://github.com/kirill-konshin/next-redux-wrapper
//
//  - withReduxSaga: Detects when redux sagas are running on the server and waits for all saga tasks to
//                   finish before returning response to the client.  This makes it easy to dispatch an
//                   async action inside of `getInitialProps` without having to worry about manually waiting
//                   for the async action to complete before responding to client.
//                   https://github.com/bmealhouse/next-redux-saga

export default withRedux(createReduxStore)(withReduxSaga(ExplorerApp));

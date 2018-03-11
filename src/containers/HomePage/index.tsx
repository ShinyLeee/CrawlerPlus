import * as React from 'react';
import NavBar from '../../components/NavBar';

interface HomePageProps {}

interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  public render(): JSX.Element {
    return (
      <>
        <NavBar isLoggedIn={false} />
      </>
    );
  }
}

export default HomePage;

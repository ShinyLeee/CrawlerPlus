import * as React from 'react';
import Helmet from 'react-helmet';

interface HomePageProps {}

interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  public render(): JSX.Element {
    return (
      <>
        <Helmet>
          <title>Home - Crawler Plus</title>
        </Helmet>
        <div>Home Page</div>
      </>
    );
  }
}

export default HomePage;

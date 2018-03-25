import * as React from 'react';
import Helmet from 'react-helmet';

interface NotFoundProps {}

interface NotFoundState {}

class NotFound extends React.Component<NotFoundProps, NotFoundState> {
  public render(): JSX.Element {
    return (
      <>
        <Helmet>
          <title>NotFound - Crawler Plus</title>
        </Helmet>
        <div>NotFound Page</div>
      </>
    );
  }
}

export default NotFound;

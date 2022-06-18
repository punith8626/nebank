import React from 'react';
import { Route,  useNavigate  } from 'react-router-dom';
import { FallbackComponent } from '../components/common/FallbackComponent';
import Header from '../components/header/Header';
import { ErrorBoundary } from 'react-error-boundary';


const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  const history = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return (
            <React.Fragment>
              <Header />
              <main role="main" className="container py-3">
                <div className="row">
                  <ErrorBoundary
                    FallbackComponent={FallbackComponent}
                  >
                    <Component  {...props} />
                  </ErrorBoundary>

                </div>
              </main>
            </React.Fragment>

          );
        } else {
          // <Redirect to="/" />
          history('/');
        }
      }}
    />
  );
};

export default ProtectedRoute;

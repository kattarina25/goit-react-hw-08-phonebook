import React, { Suspense, lazy, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import T from 'prop-types';
import { BasePathRoute, PrivateRoute, PublicRoute } from '../../routes';
import { UsersOperations, UsersSelectors } from '../../redux/users';
import { ContactsSelectors } from '../../redux/contacts';
import AppBar from '../AppBar';
import Loader from '../Loader';
import errorMessage from '../../helpers/errorMessage';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-view" */),
);
const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "contacts-view" */),
);
const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "register-view" */),
);

class App extends Component {
  static defaultProps = {
    errorUser: null,
    errorContacts: null,
  };

  static propTypes = {
    onGetCurrentUser: T.func.isRequired,
    errorUser: T.string,
    errorContacts: T.string,
  };

  componentDidMount() {
    const { onGetCurrentUser } = this.props;
    onGetCurrentUser();
  }

  render() {
    const { errorUser, errorContacts } = this.props;
    if (errorUser) errorMessage.showError(errorUser);
    if (errorContacts) errorMessage.showError(errorContacts);
    return (
      <>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={BasePathRoute.home} component={HomeView} />
            <PublicRoute
              restricted
              path={BasePathRoute.register}
              component={RegisterView}
              redirectTo={BasePathRoute.contacts}
            />
            <PublicRoute
              restricted
              path={BasePathRoute.login}
              component={LoginView}
              redirectTo={BasePathRoute.contacts}
            />
            <PrivateRoute
              path={BasePathRoute.contacts}
              component={ContactsView}
              redirectTo={BasePathRoute.login}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = state => ({
  errorUser: UsersSelectors.getError(state),
  errorContacts: ContactsSelectors.getError(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: UsersOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

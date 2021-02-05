import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userService } from "services/userService";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Home from "views/home";
import About from "views/about";
import Signin from "views/signin";
import Signup from "views/signup";
import Logout from "helpers/logout";
import ProfSignup from "views/profSignup";
import ProfCreate from "views/profCreate";
import ProtectedRoute from "helpers/protectedRoute";
import MyProfs from "views/myProfs";
import Explore from "views/explore";
import Favorites from "views/favorites";
import ProfEdit from "views/profEdit";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer position="top-center" />
        <header>
          <Navbar user={user} />
        </header>
        <main style={{ minHeight: "700px" }}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/explore" component={Explore} />
            <Route path="/logout" component={Logout} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/prof-signup" component={ProfSignup} />
            <ProtectedRoute
              path="/prof-create"
              component={ProfCreate}
              prof={true}
            />
            <ProtectedRoute
              path="/prof-edit/:id"
              component={ProfEdit}
              prof={true}
            />
            <ProtectedRoute path="/my-profs" component={MyProfs} prof={true} />
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

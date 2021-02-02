import { Component } from "react";
import { profService } from "services/profService";

class DeleteCard extends Component {
  state = {
    profId: "",
  };
  componentDidMount() {
    this.setState({ profId: this.props.profId });
    profService.deleteProf(this.state.profId);
    window.location = "/my-profs";
  }
  render() {
    return null;
  }
}

export default DeleteCard;

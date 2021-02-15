import React, { Component } from "react";
import {
  profSchema,
  initialFormValues,
  getOneProf,
} from "services/profService";
import Header from "components/header";
import ProfEditForm from "components/prof-edit-form";

class ProfEdit extends Component {
  state = {
    prof: initialFormValues,
  };

  async componentDidMount() {
    const profId = this.props.match.params.id;
    const { data } = await getOneProf(profId);
    this.setState({ prof: this.mapData(data) });
  }

  mapData(data) {
    return {
      profId: this.props.match.params.id,
      profName: data.profName,
      profTitle: data.profTitle,
      profCity: data.profCity,
      profDescription: data.profDescription,
      profEmail: data.profEmail,
      profPhone: data.profPhone,
      profImage: data.profImage,
      profPrice: data.profPrice,
    };
  }

  render() {
    const { prof } = this.state;

    return (
      <React.Fragment>
        <Header title="Edit your Card" description="Edit your Card and Save" />
        <div className="container prof-create">
          <div className="row">
            <ProfEditForm initialFormValues={prof} profSchema={profSchema} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfEdit;

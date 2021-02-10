import React, { Component } from "react";
import image from "assets/teaching-rafiki.svg";
import {
  profSchema,
  initialFormValues,
  getOneProf,
} from "services/profService";
import Header from "components/header";
import ProfEditForm from "components/prof-edit-form";

// const fromdb = {
//   profName: "Marina Hattemer",
//   profTitle: "English",
//   profCity: "Tel Aviv",
//   profDescription:
//     "Cras ut mi non est ultricies vulputate. Morbi sit amet ipsum cursus, pharetra augue nec, consequat ipsum. Nam vulputate mi ut ante dictum, sed iaculis mi suscipit. ",
//   profEmail: "mari@de.de",
//   profPhone: "0544774121",
//   profImage:
//     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
//   profPrice: "140",
// };

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
        <Header title="Edit your Card" description="Edit" />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-8">
              <img className="img-fluid w-80" src={image} alt="signin" />
            </div>
          </div>
          <div className="row">
            <ProfEditForm initialFormValues={prof} profSchema={profSchema} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfEdit;

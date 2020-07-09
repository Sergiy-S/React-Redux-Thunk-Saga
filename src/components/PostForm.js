import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../store/actions";
import { Alert } from "./Alert";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return this.props.showAlert("Please type post's name");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.setState({ title: "" });
    this.props.createPost(newPost);
  };

  changeInputHandler = (event) => {
    event.persist();

    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
            placeholder="Post title"
          />
        </div>
        <button className="btn btn-success">Create</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ alert: state.app.alert });

const mapDispatchToProps = {
  createPost,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

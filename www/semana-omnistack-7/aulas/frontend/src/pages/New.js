import React, { Component } from "react";
import api from "../services/api";
import "./New.css";

class New extends Component {
  state = {
    author: "",
    place: "",
    description: "",
    hashtags: "",
    image: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtags", this.state.hashtags);
    data.append("image", this.state.image);

    await api.post("posts", data);

    this.props.history.push("/");
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={this.handleChange}
          value={this.state.author}
        />
        <input
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={this.handleChange}
          value={this.state.place}
        />
        <textarea
          name="description"
          cols="21"
          rows="3"
          placeholder="Descrição do Post"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />
        <input type="file" onChange={this.handleImageChange} />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;

import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
  state = {
    articles: [],
    q: "",
    start_year: "",
    end_year: ""
    message: "search for articles; fields must be all entered"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getArticles = () => {
    API.getArticles({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    })
      .then(res =>
        this.setState({
          articles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getArticles();
  };

  handleArticleSave = id => {
    const article = this.state.articles.find(article => article._id === id);
    API.saveArticle(article).then(res => this.getArticles());
  };

  render() {

  }
}

export default Home;

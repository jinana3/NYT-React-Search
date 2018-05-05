import React, { Component } from "react";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState({
          articles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleArticleDelete = id => {
    API.deleteArticle(id).then(res => this.getSavedArticles());
  };

  render() {}
}

export default Saved;

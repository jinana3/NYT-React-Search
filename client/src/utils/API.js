import axios from "axios";


export default {
  // Get articles from the API
  getArticles: function(params) {
    return axios.get("/api/nytreact", { params: params });
  },
  // Get all saved articles (in books, was returning only one book at a time, here want all articles)
  getSavedArticles: function() {
    return axios.get("/api/articles/");
  },
  // Deletes the saved article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};

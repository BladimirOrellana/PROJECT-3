import axios from "axios";

export default {
  // Sending a Project info and getting a Quote
  getQuote: function(projectArrayInfo) {
    return axios.post("/api/quote", projectArrayInfo);
  }
};

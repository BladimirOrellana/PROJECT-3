import axios from "axios";
export default {
  getProjectsByStateActive: function(stateActive) {
    return axios.get("/api/projects/state/" + stateActive);
  },
  addExpenses: function(data) {
    const { quotedId } = data;
    switch (data.title) {
      case "miscellaneous":
        return axios.post(
          "/api/projects/state/active/expenses/miscellaneous/" + quotedId,
          data
        );
      case "payment":
        
        return axios.post(
          "/api/projects/state/active/expenses/payment/" + quotedId,
          data
        );
      case "material":
          console.log("AXIOS 444",data)
        return axios.post(
          "/api/projects/state/active/expenses/material/" + quotedId,
          data
        );
    }
  }
};

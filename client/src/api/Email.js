import axios from "axios";

export default {
  // Gets the Fence Side with the given id
  sendEmail: function(data) {
    return axios.post("/api/send/email", data);
  }
};

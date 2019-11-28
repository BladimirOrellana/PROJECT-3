import axios from "axios";

export default {
  // Gets the gate with the given id
  getGate: function(id) {
    return axios.get("/api/gates/" + id);
  },
  // Deletes the gate with the given id
  deleteGate: function(id) {
    return axios.delete("/api/gates/" + id);
  },
  // Update the gate with the given id
  updateGate: function(id, gateData) {
    return axios.put("/api/gates/" + id, gateData);
  },
  // Saves a gate to the database
  saveGate: function(gateData) {
    return axios.post("/api/gates", gateData);
  }
};

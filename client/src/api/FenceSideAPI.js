import axios from "axios";

export default {
  // Gets the Fence Side with the given id
  getFenceSide: function(id) {
    return axios.get("/api/fenceSides/" + id);
  },
  // Deletes the Fence Side with the given id
  deleteFenceSide: function(id) {
    return axios.delete("/api/fenceSides/" + id);
  },
  // Update the Fence Side with the given id
  updateFenceSide: function(id, fenceSidesData) {
    return axios.put("/api/fenceSides/" + id, fenceSidesData);
  },
  // Saves a Fence Side to the database
  saveFenceSide: function(fenceSidesData) {
    return axios.post("/api/fenceSides", fenceSidesData);
  },
  // Add a Gate to a Fence Side with the given id
  addGate: function(id) {
    return axios.put("/api/fenceSides/addGate/" + id);
  }
};

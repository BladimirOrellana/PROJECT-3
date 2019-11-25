import axios from "axios";

export default {
    // Gets all rawMaterials
    getRawMaterials: function() {
      return axios.get("/api/rawMaterials");
    },
    // Gets the rawMaterial with the given id
    getRawMaterial: function(id) {
      return axios.get("/api/rawMaterials/" + id);
    },
    // Deletes the rawMaterial with the given id
    deleteRawMaterial: function(id) {
      return axios.delete("/api/rawMaterials/" + id);
    },
    // Update the rawMaterial with the given id
    updateRawMaterial: function(id) {
      //return ["sample list", "2", "3"]
      return axios.put("/api/rawMaterials/" + id);
    },
    // Saves a rawMaterial to the database
    saveRawMaterial: function(rawMaterialData) {
      return axios.post("/api/rawMaterials", rawMaterialData);
    }
};
import axios from 'axios';
export default  {
    getProjectsByClienUserId: function(userId){
       
        return axios.get('/api/projects/client/projects/'+userId);
    },
    getProjectByClientProjectId: function(quoteId){
        
        
        return axios.get("/api/projects/client/project/"+quoteId)
    },
    upDateStateOfProjectByClientProjectId: function(stateOptios){
  
        const {quoteId} = stateOptios;

      return axios.put("/api/projects/client/project/"+quoteId,stateOptios)
  },
  // Gets all Projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets a Project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the Project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Update the Project with the given id
  updateProject: function(id, projectData) {
    console.log("F API",projectData)
    return axios.put("/api/projects/" + id, projectData);
  },
  // Saves a Project to the database
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },
  // Add a Fence Side to a Project with the given id
  addFenceSide: function(id) {
    return axios.put("/api/projects/addFenceSide/" + id);
  },
  // Add a Miscellaneous to a Project with the given id
  addMiscellaneous: function(id) {
    return axios.put("/api/projects/addMiscellaneous/" + id);
  }
};

import axios from 'axios';
export default  {
    getProjectsByClienUserId: function(userId){
       
        return axios.get('/api/projects/client/projects/'+userId);
    },
    getProjectByClientProjectId: function(projectId){
        console.log("PROJECT  ID axios",projectId)
        return axios.get("/api/projects/client/project/"+projectId)
    }

}

import axios from 'axios';
export default  {
    getProjectsByClienUserId: function(userId){
       
        return axios.get('/api/projects/client/projects/'+userId);
    },
    getProjectByClientProjectId: function(quoteId){
        
        
        return axios.get("/api/projects/client/project/"+quoteId)
    }

}

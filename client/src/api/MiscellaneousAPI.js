import axios from 'axios';
export default  {
    getProjectsByStateActive: function(stateActive){
       
        return axios.get('/api/projects/state/'+stateActive);
    }
}
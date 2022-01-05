import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:8080/";


class ApiServiceSearch  {

  
  showBookRandomList(){ 
    return axios.get(USER_API_BASE_URL+"mainList");
  }
}

export default new ApiServiceSearch();
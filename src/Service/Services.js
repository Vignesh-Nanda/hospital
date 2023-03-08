import axios  from "axios";
const HOSPITAL_API_BASE_URL = "http://localhost:2023/"

class Services{
    savePatient(hospital)
    {
    return axios.post(HOSPITAL_API_BASE_URL + "add",hospital);
    } 
    
    showPatient() {
        return axios.get(HOSPITAL_API_BASE_URL +"get");
    }

    delete(id) {
    return axios.delete(HOSPITAL_API_BASE_URL + "del/" + id);
    }

    getById(id) {
    return axios.get(HOSPITAL_API_BASE_URL + "get/" + id);
    }

    update(id, hospital){
        return axios.put(HOSPITAL_API_BASE_URL + "add/" + id,hospital);
    }
        
}
export default new Services();
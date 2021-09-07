import axios from "axios";

const baseURL = "https://api.github.com";
const UserAPI = {
  SearchUser: (search) => {
    return axios.get(`${baseURL}/search/users?q=${search}`);
  },

  fefchUser: () => {
    return axios.get(`https://api.github.com/users`);
  },

    loginUser: (login) =>{
      return axios.get(`https://api.github.com/users/${login}`)
    }
};

export default UserAPI;

import Axios from 'axios'



export function request(config) {
  const instance = Axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://protected-castle-01367.herokuapp.com",
    timeout: 5000
  });

  return instance(config)
}










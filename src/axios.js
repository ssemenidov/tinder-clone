import axios from 'axios'
const instance=axios.create({
    baseURL:"https://tinder-backend42.herokuapp.com"
})
export default instance
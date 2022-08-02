import axios from 'axios'

function RegisterService(user) {
    return axios.post('http://localhost:8080/register', user)
}

export default RegisterService
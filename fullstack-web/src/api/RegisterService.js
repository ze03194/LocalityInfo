import axios from 'axios'

function RegisterService(user) {
    let userName = 'user'
    let password = 'de4664d5-24ae-4fa6-bda3-9cd5ad21991f'
    let basicAuthHeader = 'Basic ' + window.btoa(userName + ":" + password)

    return axios.post('http://localhost:8080/register', user,
        {
            headers: {
                authorization: basicAuthHeader,
            }
        })

}

export default RegisterService
import axios from 'axios'
// import Nprogress from 'nprogress'
const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.MIX_API_URL
    // timeout: 10000,
})

instance.interceptors.request.use((request) => {
    // Nprogress.start()
    request.headers.common.Accept = 'application/json'
    request.headers.common['Content-Type'] = 'application/json'
    request.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    // request.headers.common['Access-Control-Allow-Origin'] = '*'

    // const userToken = sessionStorage.getItem('user')
    // if (userToken) {
    //     request.headers.common.Authorization = `Bearer ${JSON.parse(userToken)[0].token}`
    // }
    return request
})

instance.interceptors.response.use(
    (response) => {
        // console.log(['response....', response])
        // Nprogress.done()
        return response
    },
    (error) => {
        console.log(error)
        // if(error.response){
        //   if (error.message == "Network Error") {
        //     console.log(['boom', 'Network error']);
        //     window.location.assign('/network-issue');
        //   }
        // }
        // else{
        //   if (error.response.status === 401) {
        //     sessionStorage.removeItem("user");
        //     window.location.reload();
        //   }
        // }
        if (error.response.status === 401) {
            sessionStorage.removeItem('user')
            window.location.reload()
        }

        return Promise.reject(error)
    }
)
export default instance
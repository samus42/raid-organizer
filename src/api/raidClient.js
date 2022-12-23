import { ApolloClient, InMemoryCache } from "@apollo/client";
// import dataStore from './dataStore'
// const apiUrl = 'https://us-central1-shenaniganizers-e51d9.cloudfunctions.net/api'
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000'
// const apiUrl = 'http://localhost:4000' //process.env.REACT_APP_API_URL || 'http://localhost:4000'
// console.log('api url: ', apiUrl)
// console.log('env: ', process.env)
const client = new ApolloClient({
    uri: apiUrl,
    cache: new InMemoryCache()
    // request: async (operation) => {
    //     const user = dataStore.get('user')
    //     let token = ''
    //     if (user) {
    //         token = await user.getIdToken()
    //     }
    //     operation.setContext({
    //         headers: {
    //             authorization: token
    //         }
    //     });
    // }
})

export default client
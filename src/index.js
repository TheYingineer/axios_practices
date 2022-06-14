const axios = require('axios').default;

// require axios
// import axios here

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  return axios(url).then(res => {
    // console.log(res)
    return res
  }); // result
}

// test('It should make a request to the discover endpoint', async () => {
//   const result = await discoverMovie()
//   expect(result).toHaveProperty('data.results')
//   expect(result).toHaveProperty('status')
//   expect(result).toHaveProperty('headers')
// })


discoverMovie(); 

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  return axios(url).then(res=> {
    // console.log(res.data)
    return res.data  
  })
}
getMovieById(500)


// test('It should get a movie by it\'s id', async () => {
//   const data = await getMovieById(500)
//   expect(data.original_title).toBe('Reservoir Dogs')
// })





const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  return axios(url).then(res=> { // axios resturns the promises, .then promise chain // res is result
  console.log(res)
  }).catch(err=>{ // err aka error
    console.log(err.response.status)
    return err.response.status
  })
}
getMovieByIdFailure()

// test('It should FAIL to get a movie by it\'s id and return a 404', async () => {
//   const status = await getMovieByIdFailure()
//   expect(status).toEqual(404)
// })


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}
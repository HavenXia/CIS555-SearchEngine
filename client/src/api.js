const axios = require('axios');

// get the user information
async function getResults(input) {
  try {
    const res = await axios.get(`http://ec2-54-88-238-34.compute-1.amazonaws.com:45555/search/${input}`, { crossdomain: true });
    console.log(res);
    return res.data;
  } catch (err) {
    return [-1];
  }
}

export { getResults };
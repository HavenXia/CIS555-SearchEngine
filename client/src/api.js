const axios = require('axios');

// get the user information
async function getResults(input) {
  try {
    const res = await axios.get(`http://ec2-100-27-8-149.compute-1.amazonaws.com:45555/search/${input}/`, { crossdomain: true });
    console.log(res);
    return res.data;
  } catch (err) {
    return [-1];
  }
}

export { getResults };
import axios from "axios"; // HTTP Client

const API_URL = "http://localhost:8080"; // The API endpoint to communicate with the server


const getProducts =  async () => {
//  axios.get(`${API_URL}/product`)
//   .then((res) => {
//     //   console.log(res.data)
//       return res
//   })
//   .catch((err) => {
//     // console.error("errrooor",err);
//     return err
//   });
// //   return res
try {
	return await axios.get(`${API_URL}/product`)
} catch (error) {
    return error

	// Handle errors
}
};

const Services = {
    getProducts,
};

export default Services;

// api.js

const fetchWithToken = async (url, options = {}) => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
  
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers, // Include any additional headers from the options
    };
  
    // Add the token to the Authorization header if it exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  
    const response = await fetch(url, {
      ...options,
      headers,
    });
  
    // Optionally, you can handle specific status codes here
    if (!response.ok) {
      // You might want to throw an error or handle it differently
      throw new Error('Network response was not ok');
    }
  
    return response;
  };
  
  export default fetchWithToken;
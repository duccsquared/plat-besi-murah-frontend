import axios from 'axios'

export const useApi = async (method, request, query=null, body=null) => {
  try {
    const response = await axios({
      method,
      url: "http://localhost:8080/api" + request,
      // url: `${process.env.NUXT_PUBLIC_API_BASE}${request}`,
      responseType: 'json',
      params: query,
      data: body,
      headers: {
      }
    });
    console.log(response)
    return response.data;

  }
  catch (error) {
    console.log(error.response)
    return error.response
  }

  
}

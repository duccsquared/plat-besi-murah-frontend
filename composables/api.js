import axios from 'axios'

export const useApi = async (method, request, query=null, body=null) => {
  try {
    const config = useRuntimeConfig()
    const response = await axios({
      method,
      url: config.public.baseApiRoute + request,
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

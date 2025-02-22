export const useApi = async (request, method,body=null,query=null) => {
  const config = useRuntimeConfig(); 
  // console.log("API BASE URL:", config.public.apiBase); // Debugging
  let result = await useLazyFetch(formatRequest(request, query), {
      baseURL: process.env.NUXT_PUBLIC_API_BASE, // config.public.apiBase
        method: method,
        body: method != "GET" & body!=null ? JSON.stringify(body) : null,
        headers: {
            ...useRequestURL(),
            'Content-Type': 'application/json',
        }
    });
  console.log(result)
  if(result.data.value!=null) {
    return result.data.value
  }
  else if(result?.error?.value?.data!=null) {
    return result?.error?.value?.data
  }
  else if(result?.error?.value?.cause!=null) {
    return result?.error?.value?.cause
  }
  else {
    return result?.error?.value
  }
  
}

const formatRequest = (request,query) => {
  let queryList = []
  for (let key in query) {
    queryList.push(`${key}=${query[key]}`)
  }
  if(queryList.length>0) {
    return `${request}?${queryList.join('&')}`
  }
  else {
    return request
  }
}
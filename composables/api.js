export const useApi = async (request, method,body=null,query=null) => {
    let result = await useLazyFetch(formatRequest(request,query), {
        baseURL: "http://localhost:5000/api/",
        method: method,
        body: method != "GET" & body!=null ? JSON.stringify(body) : null,
        headers: {
            ...useRequestURL(),
            'Content-Type': 'application/json',
        }
    });

  if(result.error.value == null) {
    result.data.isError = false
		return result.data
	}
	else {
    result.error.isError = true
		return result.error
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
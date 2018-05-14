/**
 * @const  {AsyncFetch} Async Function
 * @param  {url} String URL to Fetch Resource
 * @const  {urlFetch} Object Promise from Fetch API
 * @return {Object|Array} if http.status 200 return JSON default An Array
 */
const AsyncFetch = async (url) => {
    const urlFetch = await fetch(url)
    return urlFetch.status === 200 && 'json' in urlFetch ? 
        await urlFetch.json() : [] 
}

/**
 * default module Export
 * @const {AsyncFetch} 
 */
export default AsyncFetch

const cacheData="aapV1"

this.addEventListener("install",(e)=>{
    e.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/",
                "/users"
            ]
            )
        })
    )
})

this.addEventListener("fetch",(e)=>{
    if(!navigator.online){
        e.respondWith(
            caches.match(e.request).then((result)=>{
                if(result){
                    return result
                }
                const requestUrl=e.request.clone()
                return fetch(requestUrl)
            }
            )
        )
    }
})
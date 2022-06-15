// export default function swDev(){
//     const swUrl=`${process.env.PUBLIC_URL}/sw.js`
//     console.log('swUrl :>> ', swUrl);
//     navigator.serviceWorker.register(swUrl).then((response) =>
//         console.log('response :>> ', response)
//     )
// }

export default function swDev(){
    
    function urlBase64ToUint8Array(base64String) {
        const padding = "=".repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
          // eslint-disable-next-line no-useless-escape
          .replace(/\-/g, "+")
          .replace(/_/g, "/");
      
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
      
        for (let i = 0; i < rawData.length; i+1) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }  

    function determineAppServerKey(){
        const vapidPublicKey="BKd0FOnmabcDtRSf7N3ogMcnnDQGtu5PSMcbzmt-uvrcDTpL424TE6W92qpnMGZPeh1XqHi1rA-MT0iUL0gBXuY"
        return urlBase64ToUint8Array(vapidPublicKey)
    }

    const swUrl=`${process.env.PUBLIC_URL}/sw.js`
    console.log('swUrl :>> ', swUrl);
    navigator.serviceWorker.register(swUrl).then((response) =>(response.pushManager.getSubscription().then(() =>(
            response.pushManager.subscribe({
                userVisibleOnly:true,
                applicationServerKey:determineAppServerKey()
            })
    ))
    ))
}
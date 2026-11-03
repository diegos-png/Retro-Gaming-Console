document.getElementById("loadConsole").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json", true)

    // xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8") ********* Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://ozarktechwebdev.com/api/consoles.json. (Reason: header ‘content-type’ is not allowed according to header ‘Access-Control-Allow-Headers’ from CORS preflight response).

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status == 200) {
                const response = JSON.parse(xhr.responseText)
                console.log(response)
            }
        }
    }
    xhr.send()
})
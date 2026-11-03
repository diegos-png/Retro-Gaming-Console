document.getElementById("loadConsole").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json", true)

    // xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8") ********* Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://ozarktechwebdev.com/api/consoles.json. (Reason: header ‘content-type’ is not allowed according to header ‘Access-Control-Allow-Headers’ from CORS preflight response).

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status == 200) {
                const response = JSON.parse(xhr.responseText)
                // console.log(response.consoles.length) *** test code to make sure we got what we wanted. returns 9
                
                //#region Adding cards
                const card = document.getElementById("cards")
                card.innerHTML = ""
                for (let i = 0; i < response.consoles.length; i++ ) {
                const cardImg = document.createElement("img")
                const cardH2 = document.createElement("h2")
                const cardP = document.createElement("p")

                cardImg.src = response.consoles[i].image
                cardImg.alt = response.consoles[i].name

                cardH2.textContent = response.consoles[i].name

                cardP.textContent = `${response.consoles[i].manufacturer} ${response.consoles[i].year}`

                card.appendChild(cardImg)
                card.appendChild(cardH2)
                card.appendChild(cardP)
                //#endregion
                };               
            }
        }
    }
    xhr.send()
})
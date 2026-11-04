document.getElementById("loadConsole").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json", true)

    // xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8") ********* Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://ozarktechwebdev.com/api/consoles.json. (Reason: header ‘content-type’ is not allowed according to header ‘Access-Control-Allow-Headers’ from CORS preflight response).

    xhr.onreadystatechange = function () {
        const message = document.getElementById("messages")
        message.textContent = "Loading..."
        if (xhr.readyState === 4) {
            message.innerHTML = ""
            if (xhr.status == 200) {
                const response = JSON.parse(xhr.responseText)
                // console.log(response.consoles.length) *** test code to make sure we got what we wanted. returns 9

                //#region Adding cards
                const card = document.getElementById("cards")
                card.innerHTML = ""
                for (let i = 0; i < response.consoles.length; i++) {
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
                };
                //#endregion

                //#region Summary Line
                const summary = document.getElementById("summaryLine")
                summary.innerHTML = ""
                let oldestConsole = response.consoles[0]
                let newestConsole = response.consoles[0]

                for (let i = 0; i < response.consoles.length; i++) {
                    if (response.consoles[i].year > newestConsole.year) {
                        newestConsole = response.consoles[i]
                    }
                    else if (response.consoles[i].year < oldestConsole.year) {
                        oldestConsole = response.consoles[i]
                    }
                    summary.textContent = `${response.consoles.length} consoles | Oldest: ${oldestConsole.name} (${oldestConsole.year}) | Newest: ${newestConsole.name} (${newestConsole.year})`
                }


            }
            else if(xhr.status != 200){
                message.textContent = `Error loading consoles. Error code: ${xhr.status}`
            }
        }
    }

    xhr.send()
})
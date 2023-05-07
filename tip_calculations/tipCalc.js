task19_tip_calculator = () => {
    let totalInput = document.getElementById("total")
    console.log(totalInput.value)
    let rangeInput = document.getElementById("tip_percent")
    let totalToPayDiv = document.createElement("to-pay")
    rangeInput.addEventListener("change",() => {
        let totalInputValue = Number(totalInput.value)
        let tipPrecentage = Number(rangeInput.value)
        let totalToPay = totalInputValue + totalInputValue * (tipPrecentage /100)
        console.log(`Total Input: ${totalInputValue}\n Tip Precentage: ${tipPrecentage}\nTotal To Pay: ${totalToPay}`)
        totalToPayDiv.innerHTML = totalToPay

    })
}

task19_tip_calculator()
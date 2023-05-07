task19_tip_calculator = () => {
  let totalInput = document.getElementById("total");
  let rangeInput = document.getElementById("tip_percent");
  let totalToPayDiv = document.querySelector(".to-pay");

  rangeInput.addEventListener("change", () => {
totalToPayDiv.innerHTML = ""

    let totalInputValue = Number(totalInput.value);
    let tipPrecentage = Number(rangeInput.value);
    let totalToPay = totalInputValue + totalInputValue * (tipPrecentage / 100);
    console.log(
      `Total Input: ${totalInputValue}\n Tip Precentage: ${tipPrecentage}\nTotal To Pay: ${totalToPay}`
    );

    let current = document.createElement("p");
    current.innerHTML = `Current Price: ${totalInputValue}`;

    let tip = document.createElement("p");
    tip.innerHTML = `Tip is ${tipPrecentage}% : ${
      (totalInputValue * (tipPrecentage / 100)).toFixed(2)
    }`;

    let total = document.createElement("p");
    total.innerHTML = `Total Price: ${totalToPay}`;

    totalToPayDiv.appendChild(current);
    totalToPayDiv.appendChild(tip);
    totalToPayDiv.appendChild(total);
  });
};
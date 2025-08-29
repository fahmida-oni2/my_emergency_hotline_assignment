// heart icon functionality
document.querySelectorAll(".heart-icon").forEach(function (btn) {
btn.addEventListener("click", function () {
    const heartIcon = document.getElementById("heart");
    let currentCount = parseInt(heartIcon.innerText);
    currentCount += 1;
    heartIcon.innerText = currentCount;
    console.log("Heart icon clicked, count updated to:", currentCount);

  });
});

// call button functionality
document.querySelectorAll(".call-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const totalCoinBalance = document.getElementById("coin");
    let coinBalance = parseInt(totalCoinBalance.innerText);

    if (coinBalance < 20) {
      alert("You have not enough coin for making a call!");
      return;
    }
    coinBalance -= 20;
    totalCoinBalance.innerText = coinBalance;

    const card = this.closest(".card");
    const serviceName = card.querySelector(".service-name").innerText;
    const number = card.querySelector(".number").innerText;

// Create history item
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center bg-[#FAFAFA] p-2 mb-2 rounded-md";
    historyItem.innerHTML = `
      <div class="flex flex-col">
        <span class="font-semibold text-sm text-[#111111]">${serviceName}</span>
        <span class="text-xs text-[#5C5C5C]">${number}</span>
      </div>
      <span class="text-xs text-[#111111]">${new Date().toLocaleTimeString()}</span>
    `;

    document.querySelector(".History").append(historyItem);
    alert(`Calling ${serviceName} at ${number}`);
  });
});

// clear button functionality
document.querySelector(".clear-btn").addEventListener("click", function () {
  document.querySelector(".History").innerHTML = "";
});

// copy button functionality
document.querySelectorAll(".copy-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const totalCopyCount = document.querySelector(".copy-count");
    let copyCount = parseInt(totalCopyCount.innerText) || 0;
    const card = this.closest(".card");
    const number = card.querySelector(".number").innerText;
    navigator.clipboard.writeText(number).then(function () {
      copyCount += 1;
      totalCopyCount.innerText = copyCount;
      alert(`Hotline Number ${number} copied to clipboard!`);
    });
  });
});

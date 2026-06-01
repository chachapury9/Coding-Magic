const input = document.getElementById("iyc-input");
const btn = document.getElementById("iyc-btn");
const result = document.getElementById("iyc-conclusion");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value % 4 === 0) {
    result.textContent = "Ви народилися у високосний рік!";
    result.style.color = "#039900";
  } else {
    result.textContent = "Ви народилися не у високосний рік!";
    result.style.color = "#990000";
  }
});

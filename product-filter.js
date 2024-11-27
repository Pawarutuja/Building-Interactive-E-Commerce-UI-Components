document.querySelector("button").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox => (checkbox.checked = false));
    alert("All filters cleared!");
  });
  
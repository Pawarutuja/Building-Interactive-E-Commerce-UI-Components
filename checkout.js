document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    alert("Order placed successfully!");
    window.location.href = "order-confirmation.html";
  });
  
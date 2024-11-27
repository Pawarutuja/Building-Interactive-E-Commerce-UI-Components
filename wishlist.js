document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      alert("Item moved to cart!");
      window.location.href = "cart.html";
    });
  });
  
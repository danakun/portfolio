// Function to update the time
function updateTime() {
  const barcelonaTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Madrid",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  document.getElementById("time").textContent = barcelonaTime;
}

// Update the time initially and then every second
updateTime();
setInterval(updateTime, 1000);

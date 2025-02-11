document.addEventListener("DOMContentLoaded", () => {
  updateCountdown()
  checkMessage()
})

function updateCountdown() {
  const now = new Date()
  const tomorrow = new Date()
  tomorrow.setHours(24, 0, 0, 0)

  const timeDiff = tomorrow - now
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

  document.getElementById("countdown").textContent = `Next card in ${hours}h ${minutes}m`

  setTimeout(updateCountdown, 60000) // Update every minute
}

function checkMessage() {
  const today = new Date().getDate()
  let message = ""

  if (today === 11) {
    message =
      "To me, you are perfect (Yes. YOU!)."
  } else if (today === 12) {
    message = "Words can't describe my love for you so I made you this website."
  } else if (today === 13) {
    message = "Right from the start, you stole my heart."
  } else if (today === 14) {
    message =
      "HAPPY VALENTINE'S DAY Dweety. I'm so lucky to have you as my valentine this and every other year of my life. I have something else I made for you."
  } else {
    document.getElementById("envelope").setAttribute("onclick", "alert('Be patient Dweety')")
    return
  }

  document.getElementById("message-text").innerText = message
}

function openEnvelope() {
  document.getElementById("envelope").style.display = "none"
  document.getElementById("message-container").classList.remove("hidden")
  setTimeout(() => {
    document.querySelector(".message-box").classList.add("show")
  }, 100)
}


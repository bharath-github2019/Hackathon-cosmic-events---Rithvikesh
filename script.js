const calendar = document.getElementById("calendar");
const eventDisplay = document.getElementById("eventDisplay");
const currentMonth = document.getElementById("currentMonth");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let month = new Date().getMonth();
let year = new Date().getFullYear();

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const cosmicEvents = {
  0: { 3: "🌠 Quadrantids Meteor Shower Peak", 4: "🌍 Earth at Perihelion" },
  1: { 1: "🌌 Planetary Alignment Begins", 10: "🌗 Moon-Mars Conjunction" },
  2: { 5: "✨ Moon-Pleiades Conjunction", 20: "🌞 Vernal Equinox" },
  3: { 21: "☿ Mercury Western Elongation", 22: "🌠 Lyrids Meteor Shower" },
  4: { 4: "🔭 Mars in Beehive", 5: "🌠 ETA-Aquarids Shower" },
  5: { 1: "♀ Venus Western Elongation", 11: "🌕 Strawberry Full Moon", 21: "🌞 Summer Solstice" },
  6: { 2: "☿ Mercury Elongation", 11: "🌕 Buck Full Moon", 29: "🌠 Delta Aquarids Shower" },
  7: { 9: "🌕 Sturgeon Moon", 13: "🌠 Perseids Meteor Shower" },
  8: { 7: "🌘 Total Lunar Eclipse", 22: "🍂 Autumn Equinox" },
  9: { 7: "🌕 Hunter’s Moon", 21: "🌠 Orionids Shower" },
  10: { 5: "🌕 Beaver Moon", 17: "🌠 Leonids Meteor Shower" },
  11: { 13: "🌠 Geminids Meteor Shower", 21: "❄ Winter Solstice" }
};

function renderCalendar(m, y) {
  calendar.innerHTML = "";
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  currentMonth.textContent = `${monthNames[m]}, ${y}`;
  const events = cosmicEvents[m] || {};

  for (let d = 1; d <= daysInMonth; d++) {
    const dateEl = document.createElement("div");
    dateEl.className = "date";
    dateEl.textContent = d;

    if (events[d]) {
      dateEl.classList.add("event");
    }

    dateEl.addEventListener("click", () => {
      document.querySelectorAll(".date").forEach(el => el.classList.remove("selected"));
      dateEl.classList.add("selected");

      if (events[d]) {
        const eventText = `📅 ${d} ${monthNames[m]}: ${events[d]}`;
        const showMoreLink = `<br><a href="event-details.html?month=${m}&date=${d}" style="color:#FFD700;">Show More</a>`;
        eventDisplay.innerHTML = eventText + showMoreLink;
      } else {
        eventDisplay.textContent = `📅 ${d} ${monthNames[m]}: No major cosmic event.`;
      }
    });

    calendar.appendChild(dateEl);
  }
}

prevMonth.addEventListener("click", () => {
  month = month === 0 ? 11 : month - 1;
  if (month === 11) year--;
  renderCalendar(month, year);
});

nextMonth.addEventListener("click", () => {
  month = month === 11 ? 0 : month + 1;
  if (month === 0) year++;
  renderCalendar(month, year);
  // Chatbot Logic
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotPopup = document.getElementById("chatbot-popup");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");

chatbotIcon.addEventListener("click", () => {
  chatbotPopup.style.display = chatbotPopup.style.display === "flex" ? "none" : "flex";
});

chatbotInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      chatbotMessages.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
      const response = getBotResponse(userMessage);
      chatbotMessages.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;
      chatbotInput.value = "";
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  }
});

function getBotResponse(input) {
  const lower = input.toLowerCase();
  if (lower.includes("moon")) return "The Moon is Earth's only natural satellite.";
  if (lower.includes("sun")) return "The Sun is a G-type main-sequence star at the center of our Solar System.";
  if (lower.includes("mars")) return "Mars is known as the Red Planet and may have once had liquid water.";
  if (lower.includes("black hole")) return "A black hole is a region in space where gravity is so strong nothing can escape.";
  return "I’m still learning. Try asking about planets, stars, or cosmic events!";
}

});


renderCalendar(month, year);
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");

chatbotIcon.addEventListener("click", () => {
  chatbotContainer.classList.toggle("hidden");
});

chatbotInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && chatbotInput.value.trim() !== "") {
    const question = chatbotInput.value.trim();
    chatbotMessages.innerHTML += `<div><strong>You:</strong> ${question}</div>`;
    chatbotInput.value = "";
    respondToQuestion(question);
  }
});

function respondToQuestion(q) {
  let answer = "I'm still learning! Try asking about planets, stars, or meteor showers.";
  q = q.toLowerCase();

  if (q.includes("moon")) answer = "The Moon is Earth's only natural satellite. It affects tides and is about 384,400 km away.";
  else if (q.includes("sun")) answer = "The Sun is a G-type main-sequence star at the center of our solar system.";
  else if (q.includes("black hole")) answer = "A black hole is a region in space where gravity is so strong that nothing, not even light, can escape.";
  else if (q.includes("meteor shower")) answer = "Meteor showers occur when Earth passes through the debris trail of a comet.";
  else if (q.includes("mars")) answer = "Mars is the fourth planet from the Sun. It's known as the Red Planet.";
  else if (q.includes("venus")) answer = "Venus is the hottest planet in our solar system due to its thick atmosphere of CO₂.";
  
  chatbotMessages.innerHTML += `<div><strong>AstroBot:</strong> ${answer}</div>`;
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
function toggleChat() {
  const chat = document.querySelector(".chatbot-container");
  chat.style.display = (chat.style.display === "flex") ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");
  const msg = input.value.trim();

  if (msg === "") return;

  // Display user's message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = msg;
  chatBody.appendChild(userMsg);

  // Bot response
  const response = getBotReply(msg.toLowerCase());
  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.textContent = response;
  chatBody.appendChild(botMsg);

  chatBody.scrollTop = chatBody.scrollHeight;
  input.value = "";
}

function getBotReply(msg) {
  if (msg.includes("moon")) return "The Moon is Earth’s only natural satellite. It affects tides and has various phases.";
  if (msg.includes("sun")) return "The Sun is the center of our solar system. It’s a G-type main-sequence star.";
  if (msg.includes("black hole")) return "A black hole is a region of space where gravity is so strong that not even light can escape.";
  if (msg.includes("planets")) return "There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.";
  if (msg.includes("meteor") || msg.includes("shower")) return "Meteor showers occur when Earth passes through debris left by comets.";
  if (msg.includes("eclipse")) return "Eclipses happen when one celestial body moves into the shadow of another — solar and lunar eclipses are the most common.";
  if (msg.includes("venus")) return "Venus is the second planet from the Sun and has a thick atmosphere that traps heat, making it the hottest planet.";

  return "I'm still learning. Try asking about celestial bodies, eclipses, planets, or astronomical events!";
}

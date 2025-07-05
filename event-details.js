const params = new URLSearchParams(window.location.search);
const month = parseInt(params.get("month"));
const date = parseInt(params.get("date"));

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const cosmicEvents = {
  6: {
    11: {
      title: "🌕 Buck Full Moon",
      description: "The Buck Moon is named after the time when male deer (bucks) grow new antlers. It's one of the most beautiful full moons of the year and is best observed around midnight. No equipment is needed — just a clear sky!"
    },
    29: {
      title: "🌠 Delta Aquarids Meteor Shower",
      description: "The Delta Aquarids peak on the night of July 29–30. Look toward the southern sky after midnight. Expect 10–20 meteors/hour under dark skies. A great event for stargazers!"
    }
  }
};

const event = cosmicEvents[month]?.[date];
const detailBox = document.getElementById("eventDetailBox");

if (event) {
  detailBox.innerHTML = `<strong>${event.title}</strong><br><br>${event.description}`;
} else {
  detailBox.textContent = "No detailed information available for this event.";
}

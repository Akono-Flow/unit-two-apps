// Each app has an icon name and a color
const apps = [
  {
    title: "Electromagnetic Radiation",
    description: "Explore the Electromagnetic spectrum, uses and effects of EM Radiation",
    url: "https://emr.learnwithcole.com/",
    icon: "radiation",
    color: "#0d6efd"
  },
  {
    title: "UV-VIS Spectroscopy",
    description: "Explore Beer-Lambert's Law and the concepts behind UV-VIS Spectroscopy",
    url: "https://uv-vis.learnwithcole.com/",
    icon: "sun",
    color: "#e83e8c"
  },
  {
    title: "Infrared Spectroscopy",
    description: "Explore the vibrational modes of molecules and their interaction with IR",
    url: "https://infrared.learnwithcole.com/",
    icon: "waypoints",
    color: "#a6b592"
  }
  // {
  //   title: "Titration Curves",
  //   description: "Explore types of titration curve with interactive simulator",
  //   url: "https://tcurves.learnwithcole.com/",
  //   icon: "flask-round",
  //   color: "#05cdfe"
  // },
  // {
  //   title: "Simple Harmonic Oscillator",
  //   description: "Simulate SHM Motion with this interactive simulator",
  //   url: "https://oscillator.learnwithcole.com/",
  //   icon: "wand-sparkles",
  //   color: "#06cdaf"
  // },
  // {
  //   title: "SCQ Visual Capture",
  //   description: "Captures visuals from TVJ matches",
  //   url: "https://scqviscap.learnwithcole.com/",
  //   icon: "video",
  //   color: "#06cdaf"
  // },
  // {
  //   title: "Radioactivity Simulator",
  //   description: "Explore Band of Stability with Simulation",
  //   url: "https://radioactive.learnwithcole.com/",
  //   icon: "radiation",
  //   color: "#e83e8c"
  // },
  // {
  //   title: "Quiz Zip Merger",
  //   description: "Combine multiple zip folders into one from screenshot workflow",
  //   url: "https://scqvismerge.learnwithcole.com/",
  //   icon: "video",
  //   color: "#0d6efd"
  // },
  // {
  //   title: "Scorer and Timer",
  //   description: "Explore Ideas and topics with Crossword",
  //   url: "https://scqtimer.learnwithcole.com/",
  //   icon: "gamepad-2",
  //   color: "#0d6efd"
  // },
  // {
  //   title: "SCQ Viewer",
  //   description: "Manipulate all dimensions of quiz resources",
  //   url: "https://iviewer.learnwithcole.com/",
  //   icon: "gamepad-2",
  //   color: "#0d6efd"
  // },
  // {
  //   title: "SCQ Video Center",
  //   description: "Creates Images, Audio and Text data",
  //   url: "https://iscribe.learnwithcole.com",
  //   icon: "video",
  //   color: "05cdfe"
  // },
  // {
  //   title: "SCQ Visual Center",
  //   description: "Displays Images from TVJ's School's Challenge Quiz",
  //   url: "https://visuals.learnwithcole.com",
  //   icon: "gamepad-2",
  //   color: "05cdfe"
  // },
  //  {
  //   title: "SCQ Buzzers",
  //   description: "Displays buzzers from TVJ's School's Challenge Quiz",
  //   url: "https://buzzers.learnwithcole.com",
  //   icon: "gamepad-2",
  //   color: "#0d6efd"
  // }
];

const gallery = document.getElementById("gallery");

apps.forEach(app => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="icon" style="background:${app.color}">
      <i data-lucide="${app.icon}"></i>
    </div>
    <h2>${app.title}</h2>
    <p>${app.description}</p>
    <a href="${app.url}" target="_blank" class="launch-btn">Launch</a>
  `;
  gallery.appendChild(card);
});

// Initialize Lucide icons
lucide.createIcons();

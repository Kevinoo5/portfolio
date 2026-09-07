const projects = [
  {
    id: 1,
    title: "Aasta Tegija 2024 Competition",
    link: "https://github.com/Kevinoo5/AastaTegija2024",
    imageUrl: "voco.png",
    description:
      "This project was created for the Aasta Tegija 2024 competition at Tartu Vocational College on January 17-18, 2024. Teams of 2-3 students recreated a randomly chosen Figma prototype in about 12 hours using plain HTML and CSS. The prototype was for the Baltic Games for Vocational Schools.",
    liveDemo: "https://aasta-tegija-2024.vercel.app/",
  },
  {
    id: 2,
    title: "Signal SOS",
    link: "https://github.com/Krikmann/Todog",
    imageUrl: "signalsos.png",
    description:
      "Signal SOS is a game which I made with a team of 4 people for the University of Tartu Game Jam 2026. The game was made in Godot for the theme of 'Signal'. The goal of the game is to send multiple types of distress signals to potential rescuers by playing simple minigames. The game was made in 48 hours and we won 4th place in the competition.",
    liveDemo: "https://kevinoo5.itch.io/signal-sos",
  },
  {
    id: 3,
    title: "Watering Indicator For Houseplants",
    link: "https://github.com/OkiEmil/watering_indicator",
    liveDemo:
      "https://github.com/OkiEmil/watering_indicator/blob/main/Watering%20indicator%20poster.pdf",
    imageUrl: "houseplant.svg",
    description:
      "This group project was created using plant pot weight data given to us by Click & Grow, who were hoping we could find the optimal watering time only by weight, since water intake takes place in two phases, which should be detectable using data and machine learning." +
      "Sadly we were unable to get very conclusive results, but during it I learned a lot about Machine Learning and data processing. There is also a pdf poster attached, which we used to present our findings.",
  },
  {
    id: 4,
    title: "Wurtle",
    link: "https://github.com/Kevinoo5/Wurtle-projekt/tree/main",
    imageUrl: "wordle.png",
    extraClasses: "opacity-80",
    description:
      "Wurtle is a word guessing game similar to Wordle, built with Tkinter in Python. Players guess a hidden word of a specific length, receiving feedback on their guesses. The game uses a word database and was created to learn about databases and Tkinter.",
  },
];

export default projects;

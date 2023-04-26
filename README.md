# Welcome to the GlowLife ScoreKeeper App!
This application is for participants of the [GlowLife Night Golf Events](https://glowlife.com/). Development of this application is related to ongoing projects with the GlowLife Entertainment and Smarttarget.golf event companies. This is a method to keep score within the event, which involves hitting a ball into an inflatable "target", earning the player 1 point per confirmed hit. The targets light up and play music when contact is made, which will signal the user to increase their score by one point. This was created with the intent of providing the players a straightforward way to keep score, a feature that has been requested since the inception of the events.

# How it Works
The user begins by inputting their name, group number, and location into the form on the home page. This information is stored and the page will redirect to a score page. The score page features a counter that starts at 0 with buttons to add or subtract points. The subtraction method was added as sometimes players mistakenly believe to have hit a target, but it does not count as a "confirmed" contact unless the target plays its sound and animation. If the shot is successful, the player will add a single point. There is also the option to create targets with higher point value i.e. a 5 point target that would yield a +5 point addition.

# Storing Data
There is no need to login or provide personal information. The application utilizes database solution [MongoDB Atlas](https://www.mongodb.com/atlas/database) to store the [group number, player name, and current points](https://ibb.co/285dG5p) -- this information is entered into the form on the home page. Scores will not reset on refresh and users can revisit their scores by entering their previously used group number and name. 

# Weather
- About [Open Weather](https://rapidapi.com/worldapi/api/open-weather13/), Via worldapi:
- Access current weather data for any location including over 200,000 cities.
- Weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations.
- / Displayed on the scores page so the user can keep track of the current temperature and wind speed
- This was placed due to a series of users requesting specific weather information during night golf events

# Deployment
This app is deployed via [Vercel](https://glowlife-scorekeeper.vercel.app/). It can also be accessed via [QR code](https://ibb.co/VmHJ177).

# Style Guide
[Updated mockups and design guidelines](https://drive.google.com/drive/folders/1oJgb6zn90-7_nZiNfIjGvQAqanA6TCe3?usp=share_link)


# References, Materials
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- In addition to available lectures and course materials (via Canvas), a series of [external references](https://www.canva.com/design/DAFhOjPlRl8/6bT43fcGmaCFF3vcmHBM0g/edit?utm_content=DAFhOjPlRl8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) were used when setting up the database and having the scores/names stored.

-- 
# Project Requirements
(via Canva)
- NextJS and React application
- Solves a meaningful problem for a business & its users
- Stores data in MySQL, MongoDB, or other DB solution
- Utilizes third party web API
- Responsive on mobile, tablet, and desktop devices
- Includes a high-quality README.md file including:
The purpose of the application and inspiration behind its creation, A breakdown of the technology used for the application, Instructions for contributing to the project 



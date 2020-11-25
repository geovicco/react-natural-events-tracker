# react-natural-hazards-map
 Global map showing near-real time events such as earthquakes, storms, wildfires, etc., using NASA's EONET API in a React-Mapbox Basemap

 ### Create API Key for EONET
 1. navigate to NASA's API Page @ https://api.nasa.gov/ 
 2. Select Generate API Key and complete the signup form to obtain an API key for your project.

### Start a new react project in the root directory
> npx create-react-app .

#### Install React-Mapbox-GL library
> npm i mapbox-gl
> 
> npm install --save react-map-gl
<!-- > npm install react-mapbox-gl mapbox-gl --save -->

#### Install Iconify library for displaying different icons on the map
<!-- > npm install @iconify/react @iconify/react-mdi -->
> npm install --save-dev @iconify/react @iconify-icons/mdi
<!-- Weather Icons -->
> npm install --save-dev @iconify/react @iconify-icons/wi
> npm i --save @fortawesome/fontawesome-svg-core
> npm install --save @fortawesome/free-solid-svg-icons
> npm install --save @fortawesome/react-fontawesome


### Start React Development Server
> npm start

### Navigate to public/index.html and change the title to Natural Events Tracker

### Delete Unwanted files from the src directory
- App.css
- App.test.js
- logo.svg
- setupTests.js

### Cleanup App.js by removing imports to logo.svg and app.css

### Inside src folder create a components folder 
> mkdir src\components
### Create a file called Map.js inside components folder
> touch src/components/Map.js

### Hosting React Application on Netlify
Application URL: https://focused-cori-4b53cf.netlify.app/ 
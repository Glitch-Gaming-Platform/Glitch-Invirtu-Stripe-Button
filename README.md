
# Glitch Invirtu Stripe Donations Widget


## Overview

The Stripe Donations Widget is a feature that will allow users to accept donations via Stripe and also allow the platform to take a percentage of the donation.

 ## How To Install
 
Invirtu/BingeWave provides an Overlay CMS that allows developers to easily build their custom functionality into live events (video conferences, live streams, and 
AR). The Overlay CMS also has a no-code interface, allowing non-technical users to make modifications.

The functionality of the full-screen image overlay is deployed via the overlay system and can be implemented using the following steps.

1.  Create a new widget in the Invirtu/BingeWave [builder here](https://developers.bingewave.com/widgets). **Important:** When making the widget, **mark it as 
published** so it will be usable when you implement it into your template.
2.  From the src folder here, copy the index.html into the HTML section in the widget builder.
3.  From the src folder here, copy the style.css into the CSS section in the widget builder.
4.  From the src folder here, copy the app.js into the Javascript section in the widget builder.
5.  Save the changes in the widget builder.
6.  Release the widget (button next to save changes).
7.  Go to the Organizer account and create or update a template.
8.  In the Interface Builder, use the Widgets section to add the widget to the player and only enable it for the streamer.

## How It Works

The Stripe Donations Widget is a relatively simple utility that works as such:

1.  In the backend application, set up the Stripe credentials with API Keys.
2.  When a user authenticates with Stripe, their payment information will be stored in your backend.
3.  When they create an event and their payment information is set, the information will be set as an environment variable for the widget using the API Endpoint: 
[https://developers.bingewave.com/docs/eventwidgets#setenv](https://developers.bingewave.com/docs/eventwidgets#setenv)
4.  When the session starts, the donate button will appear on-screen. When a user clicks it, they will be brought to Stripe checkout screen.
  

## Key Areas To Understand

The Stripe Donations Widget is comprised of several tools for the functionality to work. To get a better of the tools, you can review the following:

- [Invirtu Name Space](https://developers.bingewave.com/javascript/namespace)  
- [Invirtu Environment Variabes](https://developers.bingewave.com/javascript/bwenv)

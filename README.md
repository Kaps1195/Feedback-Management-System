# Feedback-Management-System

**This project serves as primer on the MERN stack.**

## What it does : As a product owner, you get to send surveys to users asking them to review your product/service and vote a yes/no if they like it.

## Walk Through of the project :

1. Once you reach the landing page, you will have to login via Google.
2. You will be redirected to the Dashboard where you have to first apply for credits(Only 5$ can be credited in one go).
3. After you have been credited, you get to send out your survey once you click on a new survey button(bottom right).
4. Fill out the survey form fields, you can send it to multiple emails(comma separated emails). Ex: kaps@gmail.com, xyz@hotmail.com, abc@gmail.com
5. The users will receive your email, they'll vote and you'll get to see the number of yes/no votes on your dashboard. 

## Frontend Features :

1. Redux for state management.
2. MaterializeCSS for UI Design.

## Backend Features : 

1. Authentication with Passport.js using Google OAuth 2.0.
2. Billing with Stripe API.
3. Sending Mails via SendGrid API.
4. Handling webhook data from SendGrid.

**This project won't work on your dev machine, since you won't have the config keys(dev.js) which is under .gitignore. 
But fear not, heroku's da MVP, cheggitout here => https://fierce-everglades-38433.herokuapp.com/ **

# UVoice: Feedback collection App
UVoice is a B2C feedback collection app. It is currently deployed [here](https://floating-journey-49522.herokuapp.com/)!.
## App Overview
This is a feedback collection application for business companies to to send survey emails to a big list of customers to collect feedbacks. If you are a startup owner/product manager and want to collect feedbacks from your customers, you can use this application to send emails requesting feedback and get tabulation of results.

## App User Flow:  
1. Users sign up via Google OAuth  
Homepage  
<img src="/Images/WelcomePage_.jpg">   
Login  
<img src="/Images/Login_.jpg">  
2. Users need to pay for email credits via Stripe  
<img src="/Images/Payment.jpg">  
3. Users create a new 'campaign' and enter a list of emails to send surveys to  
<img src="/Images/Survey_.jpg">  
Confirmation Page  
<img src="/Images/Confirmation_.jpg">  
4. The app will send emails to a list of surveyees and surveyees click on the link in the email to provide feedbacks  
<img src="/Images/Email_.jpg">   
5. Users can see reports of all survey responses  
<img src="/Images/Feedback_.jpg">  

## Tech Stack: 
Main tech for main steps (some smaller libraries not included):
1. **User Signup:** Express Server + MongoDB + PassportJS
2. **User Payment:** Stripe + MongoDB
3. **User Create Survey:** React + Redux
4. **User Enter Emails:** React + Redux + Redux Form
5. **Email Provider:**  SendGrid
6. **Surveyees Click Links:** SendGrid + Express + MongoDB
7. **Deploy:** Heroku.

## Run:
To run this project:  
git clone https://github.com/tthh1995/UVoice_feedback_app.git  
npm i (to install the dependencies)  
npm run dev (to start the local server)  


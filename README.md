**This project is about selling cars. Features:**
- AuthGuard and AdminGuard were implemented for the authentication and authorization handling
- Serialize decorator for serializing any type of DTO for responses
- Controller, Service, Repository architecture
- Cookies
- Unit and E2E tests in Jest
- Production, Development and Testing invironments (PosgteSQL for production, SQlite for dev and testing)


**Car Pricing Project**
- User sign up with email and password
- User gets an estimate for how much their car is worth based on the make/model/year/mileage/
- Users can report what they sold their vechicles for
- Admins have to approve reported sales

API:
POST /auth/signup - create a new user
POST auth/signin - sign in to a program
GET /reports - get all selling reports
POST /reports - create a report
PATCH /reports - Approve or reject selling report

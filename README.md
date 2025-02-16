# DevTinder Application (Interaction between the developers)

## Waterfall Model (SDLC Life cycle methods)
- Requirements 
    - Product/Project Managers + designers : define the requirements
- Design
    - Senior Engineers and Engineering Managers : makes the design documents (HLD/LLD).
- Development
    - SDE1, SDE2 team : develops the application
    - Write the unit testcases
- Testing
    - QA team : tests the application
- Deployment
    - DevOps : deploy the application
- Maintainance

## Monolith vs Microservices architectures 
- **Monolith architecture :**
    - Whole application in one big repository 
        - Frontend
        - Backend
        - DB connection
        - Emails
        - Authentication
        - Analytics
- **Microservices architecture**
    - Develop the application in different microservices.
    - Most of the industries follows Microservices architecture.
|   | Monolith architecture | Microservices architecture |
| - | --------------------- | -------------------------- |
| Dev Speed | Slower - because lot of developers working in same repository | Faster- bccause each team handle their repository independently |
| Code Repo |single | Multiple |
| Scalability | bad | good |
| Deployment | deploy whole code, even if it is a small change | easy to deploy |
| Tech stack | restricted | use different techstack in each microservice|
| Infra cost | lower | higher|
| Complexity | tough when the application is bigger | easy for big applications |
| Fault Isolation | hard | easy |
| Testing | easier | hard |
| Ownership | central | multiple team |
| Maintainance | hard | easier to maintain |
| Debugging | slightly easier | hard |
| Dev Experience | recommended to use microservices for small apps | recommended to use microservices for big apps |
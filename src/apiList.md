# DevTinder APIs

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile
- PATCH /profile/edit
- PATCH /profile/password  - forgot password API

## connectionRequestRouter
- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId
- `Status: ignored, interested, accepted, rejected`

## userRouter
- GET /user/connections
- GET /user/requests/received
- Get /user/feed - Gets you the profiles of other users on platform

# IMDb

---

## INTRODUCTION

- This is a backend module for rating poiliticians,their political party and their works.
- User can register themselves and view the politicians and rate them accordingly.
- They can also view their political party and their works and also can rate them.

## TECHNOLOGIES USED

- I have used Node JS,Express JS and Mongo DB as the backend.

## REQUIREMENTS

- Download and install MongoDB in your system and set the environment variables.
- Download MongoDB Compass.
- Open your command prompt and run the command `mongod`.
- MongoDB server will be running after executing the command.
- Download the code or clone it into your system.
- Run `npm i` to download all required node modules.
- At last run `node index.js`.
- If node is not installed in your system install it.

## API ENDPOINTS

1. There are actually seven modules.
    - User
    - Politician
    - Political Party
    - Work
    - Politician Rating
    - Political Party Rating
    - Work Rating

### USER

| METHOD | ROUTE |
| --- | --- |
| GET | `http://localhost:{PortNumber}/users` |
| GET | `http://localhost:{PortNumber}/users/{userID}` |
| POST | `http://localhost:{PortNumber}/users` |
| PUT | `http://localhost:{PortNumber}/users/{userID}` |
| DELETE | `http://localhost:{PortNumber}/users/{userID}` |

### POLITICIAN

| METHOD | ROUTE |
| --- | --- |
| GET | `http://localhost:{PortNumber}/politicians` |
| GET | `http://localhost:{PortNumber}/politicians/{politicianID}` |
| POST | `http://localhost:{PortNumber}/politicians` |
| PUT | `http://localhost:{PortNumber}/politicians/{politicianID}` |
| DELETE | `http://localhost:{PortNumber}/politicians/{politicianID}` |

### POLITICAL PARTY

| METHOD | ROUTE |
| --- | --- |
| GET | `http://localhost:{PortNumber}/politicalParties` |
| GET | `http://localhost:{PortNumber}/politicalParties/{politicalPartyID}` |
| POST | `http://localhost:{PortNumber}/politicalParties` |
| PUT | `http://localhost:{PortNumber}/politicalParties/{politicalPartyID}` |
| DELETE | `http://localhost:{PortNumber}/politicalParties/{politicalPartyID}` |

### WORK

| METHOD | ROUTE |
| --- | --- |
| GET | `http://localhost:{PortNumber}/works/{politicianID}` |
| POST | `http://localhost:{PortNumber}/works/{politicianID}` |
| PUT | `http://localhost:{PortNumber}/works/{politicianID}` |
| DELETE | `http://localhost:{PortNumber}/works/{politicianID}/{workID}` |

### POLITICIAN RATING

| METHOD | ROUTE |
| --- | --- |
| GET | `http://localhost:{PortNumber}/politicians/ratings/{politicianID}` |
| POST | `http://localhost:{PortNumber}/politicians/ratings/{politicianID}` |
| PUT | `http://localhost:{PortNumber}/poticians/ratings/{politicianID}/{userID} `|

### POLITICAL PARTY RATING

| METHOD | ROUTE |
| --- | --- |
| GET | `http://localhost:{PortNumber}/politicalParties/ratings/{politicianID}` |
| POST | `http://localhost:{PortNumber}/politicalParties/ratings/{politicianID}` |
| PUT | `http://localhost:{PortNumber}/poticalParties/ratings/{politicianID}/{userID}` |

### WORK RATING

| METHOD | ROUTE |
| --- | --- |
| GET | `http://localhost:{PortNumber}/politicians/works/ratings/{politicianID}` |
| POST | `http://localhost:{PortNumber}/politicians/works/ratings/{politicianID}` |
| PUT | `http://localhost:{PortNumber}/poticians/works/ratings/{politicianID}/{userID}` |

## LICENSE & COPYRIGHT

© Jagapradeep G

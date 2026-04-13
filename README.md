# chai-aur-backend
programming language - javascript.
database- mongo , sql

>> LECTURE 1

.server is software 
.database is in another continent
. in js handle file , data , third party api (mail)
.node.js runtime of java
.api interaction btw backend and device . it send arrray , t/f etc  and also recive 
................................................................
FOLDERS IN BACKEND
.............................................................
.src - index-db connecct
     -app - config , cookies
     - constants - enum (male , female, other),db name
......................................................................
🔹 1. Models (Database Structure)
   .Defines how your data looks
   👉 Example: User schema (name, email, password)
   ................................................................................
🔹 2. Routes (API Endpoints)
    Defines URLs (API paths)
Connects route → controller

👉 Example:

POST /api/register → registerUser()
............................................................................................
🔹 3. Controllers (Logic)
Contains main business logic
Handles request + response

👉 Example:

Register user
Login user

📌 Think: “What happens when API is called?”
..................................................................................
🔹 4. Middleware (Middle Layer)
Runs before controller
Used for:
Authentication (JWT)
Error handling
Logging

📌 Think: “Check/modify request before main logic”
............................................................................
🔹 5. Utils (Helper Functions)
Reusable functions(mail)
Used anywhere

👉 Example:

Generate token
Hash password

📌 Think: “Common tools used everywhere”
.............................................................................................

🔹 6. DB (Database Connection)
Connects your app to MongoDB

👉 Example:

mongoose.connect(process.env.MONGO_URI)

📌 Think: “How app connects to database”
.................................................................................

Client (Frontend / Postman)
          ↓
        Routes
          ↓
     Middleware
          ↓
     Controllers
          ↓
        Models
          ↓
      Database (MongoDB)
....................................................................................
  🔥 Full Flow Example
User hits API → /register
Route catches it
Middleware checks (if needed)
Controller runs logic
Model saves data
DB stores data
Response sent back
.........................................................................................

>>LECTURE 2


      

     

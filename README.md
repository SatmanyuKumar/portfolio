# Satmanyu Kumar — Portfolio (Java + React)

A full-stack portfolio site.

- **Backend:** Spring Boot (Java 17) serving your profile, skills, projects, education, and certifications as JSON, plus a `/api/contact` endpoint that saves messages to an embedded H2 database.
- **Frontend:** React (Vite) rendering the data with a terminal / Java-class themed design. If the backend isn't running, it automatically falls back to static data (`src/data.js`) so the site still works.

## Run the backend

Open `backend/` in STS / IntelliJ / Eclipse (or use the terminal):

```bash
cd backend
./mvnw spring-boot:run
```

It starts on **http://localhost:8080**. Check it's working: open `http://localhost:8080/api/profile` — you should see JSON.

Saved contact messages live in an H2 database file at `backend/data/portfolio.mv.db`. You can browse them at `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:file:./data/portfolio`, user `sa`, blank password).

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173**.

## Contact form moderation

Messages are checked twice before they're saved:

1. **Instant, client-side** (`frontend/src/contentFilter.js`) — a small keyword list catches obvious cases the moment you hit send, with zero network delay.
2. **AI-based, server-side** (`backend/.../service/ModerationService.java`) — calls Groq's `llama-3.1-8b-instant` model (via Spring AI's OpenAI-compatible client) to classify the message as `ABUSIVE` or `OK`. This catches things the keyword list can't (rephrased insults, no exact banned word, etc.), and runs even if someone skips the frontend entirely and calls the API directly.

To enable step 2:
1. Get a free API key at https://console.groq.com/keys
2. Set it as an environment variable before starting the backend:
   ```bash
   export GROQ_API_KEY=gsk_your_key_here      # macOS/Linux
   set GROQ_API_KEY=gsk_your_key_here         # Windows
   ```

If the Groq call fails for any reason (no key set, network issue, rate limit), `ModerationService` automatically falls back to the same keyword list the frontend uses (`backend/.../util/ModerationUtil.java`) — the contact form keeps working either way, just with less sophisticated detection.

## Before you deploy / share this

1. In `backend/.../controller/PortfolioController.java`, replace the `github` and `linkedin` URLs (currently placeholders) with your real profile links, and add real GitHub repo links for each project (`link` field).
2. Update `frontend/vite.config.js` / `src/api.js` `BASE_URL` if you deploy the backend somewhere other than `localhost:8080`.
3. Consider swapping H2 for PostgreSQL (you already use Postgres in your SMC project) by updating `application.properties` and adding the `postgresql` driver dependency in `pom.xml`.

## Project structure

```
portfolio/
├── backend/     Spring Boot API (Java)
│   └── src/main/java/com/satmanyu/portfolio/
│       ├── model/         Profile, Project, ContactMessage
│       ├── controller/    PortfolioController, ContactController
│       └── config/        WebConfig (CORS)
└── frontend/    React app (Vite)
    └── src/
        ├── components/    Navbar, Hero, About, Skills, Projects,
        │                  Certifications, Education, Contact, Footer
        ├── api.js         fetch helpers (with fallback)
        └── data.js        static fallback data
```

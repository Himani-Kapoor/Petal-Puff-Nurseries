# AGENTS.md

Purpose
- Provide concise, actionable instructions for AI coding agents working in this repository.

Quick Start
- Backend (Express + Node):
  - Commands:
    - `cd backend`
    - `npm install`
    - `npm run dev` (uses `nodemon server.js`)
    - `npm start` (runs `node server.js`)
  - Key files:
    - `backend/server.js` — app entry
    - `backend/package.json` — npm scripts and deps
  - Important folders: `backend/src/controllers`, `backend/src/models`, `backend/src/routes`, `backend/src/services`, `backend/src/middleware`, `backend/src/db`

- Frontend (Vite + React):
  - Commands:
    - `cd frontend`
    - `npm install`
    - `npm run dev` (starts Vite dev server)
    - `npm run build` (builds production bundle)
  - Key files:
    - `frontend/package.json` — npm scripts and deps
    - `frontend/src/main.jsx` — app entry
  - Important folders: `frontend/src/pages`, `frontend/src/routes`, `frontend/src/styles`, `frontend/src/assets`

Repository notes for agents
- There are no existing agent customization files (e.g. `.github/copilot-instructions.md`, `AGENTS.md`) prior to this addition.
- Root `README.md` exists but is minimal.
- Backend uses ES modules (`"type": "module"` in `backend/package.json`) and expects environment configuration (check `.env` if present).
- Frontend includes ESLint config and uses Vite with React.

Guidance for AI agents
- Prefer minimal, linked guidance — link to files instead of copying long docs.
- When running or testing, use the project-specific scripts in `backend/package.json` and `frontend/package.json`.
- Preserve existing project structure when making changes; follow established folders for controllers, models, routes, and pages.
- If adding runnable scripts or CI, document them here and link to relevant files.

Next steps (suggested)
- Add `.github/copilot-instructions.md` for organization-wide policies if desired.
- Add short CONTRIBUTING.md or ARCHITECTURE.md for deeper onboarding.

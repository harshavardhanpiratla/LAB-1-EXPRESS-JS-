# Lab 1: Node.js and Express server

**Name:** P S HARSHAVARDHAN · **Registration number:** 252U1R9111 · **Section:** 111 CSE GEN AI 2B

**Live link:** <paste your deployed URL here, or write: Not deployed because ... (and add Postman screenshots)>

## How to run

```bash
cd lab-01
npm install            # installs express into node_modules
npm start              # Express server on http://localhost:3000
npm run start:http     # (optional) plain http-module server on port 3000
```

Environment variables: none required. `PORT` is optional (defaults to 3000).

## Endpoints

| Method | Path     | Description                                   | Status |
| ------ | -------- | --------------------------------------------- | ------ |
| GET    | `/`      | Welcome text                                  | 200    |
| GET    | `/about` | JSON with name, registration number, section  | 200    |
| GET    | `/time`  | Current date and time (`new Date()`) as JSON  | 200    |
| ANY    | others   | `404 Not Found` message                       | 404    |

## Status code log

| URL tested       | Status |
| ---------------- | ------ |
| `/`              | 200    |
| `/about`         | 200    |
| `/time`          | 200    |
| `/unknown`       | 404    |

## package.json fields explained

- **name** – project name (lowercase, no spaces).
- **version** – project version (semantic versioning: major.minor.patch).
- **description** – short summary of the project.
- **main** – entry file when the package is imported/run.
- **scripts** – shortcut commands such as `npm start`.
- **author** – who wrote it.
- **license** – terms under which the code can be used.
- **dependencies** – packages needed at runtime (added by `npm install express`).

## Screenshots

![Route /](screenshots/root.png)
![Route /about](screenshots/about.png)
![Route /time](screenshots/time.png)
![404 for unknown path](screenshots/404.png)

## Notes: problems faced and how I solved them

- The 404 handler must be placed **after** all routes; otherwise it would catch every request first.
- Port 3000 can only be used by one server at a time, so I stopped the plain http server before starting Express.
- `node_modules` is listed in `.gitignore`; it is recreated with `npm install`.

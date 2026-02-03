# Discovered Environment Variables

These are the environment variables referenced in the frontend codebase:

- `VITE_APP_BASE_URL` — referenced in `src/services/apis.js` and also mentioned in `src/components/common/Navbar.jsx`.
- `VITE_APP_RAZORPAY_KEY` — referenced in `src/services/operations/studentFeaturesAPI.js`.

Notes:
- No `.env` files were found in the repository.
- No `process.env` usage was detected; the app uses `import.meta.env` (Vite).
- For Vite apps, client-exposed env variables must start with `VITE_`.

Usage:
1. Copy `.env.example` to `.env` (or `.env.local`) at the project root.
2. Fill in real values and keep `.env` out of version control.

Example:

```
VITE_APP_BASE_URL=https://api.example.com
VITE_APP_RAZORPAY_KEY=pk_test_XXXX
```

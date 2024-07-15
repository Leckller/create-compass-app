import { constDeps } from "../interfaces/Dependencies";

export const ReduxKitDeps: constDeps = [
  {
    "@reduxjs/toolkit": "^2.2.5",
    "react-redux": "^9.1.2",
  },
  {},
];

export const TailwindDeps: constDeps = [
  {},
  {
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
  },
];

export const ReactDeps: constDeps = [
  {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
  },
  {
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "typescript": "^5.2.2",
    "vite": "^5.1.0",
  },
];

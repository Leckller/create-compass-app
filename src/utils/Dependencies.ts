import { constDeps } from "../interfaces/Dependencies";
// {dependencies}, {devdependencies}, {scripts}
export const ReduxKitDeps: constDeps = [
  {
    "@reduxjs/toolkit": "^2.2.5",
    "react-redux": "^9.1.2",
  },
  {},
  {}
];

export const TailwindDeps: constDeps = [
  {},
  {
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
  },
  {}
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
  {}
];

export const WebPackDeps: constDeps = [
  {},
  {
    "clean-webpack-plugin": "^4.0.0",
    "ts-loader": "^9.5.1",
    "typescript": "^5.5.3",
    "webpack": "^5.93.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.4"
  },
  {
    "start": "webpack-dev-server",
    "build-dev": "webpack",
    "build-production": "webpack --config webpack.config.production.js",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  }
]
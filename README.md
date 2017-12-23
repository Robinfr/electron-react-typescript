# electron-react-typescript

### A Boilerplate for an Easy Start with TypeScript, React, and Electron.

[![React](docs/img/react.png)](https://reactjs.org/)
[![Webpack](docs/img/webpack.png)](https://webpack.js.org/)
[![TypeScript](docs/img/ts.png)](https://www.typescriptlang.org/)
[![Electron](docs/img/electron.png)](https://electronjs.org/)
[![Redux](docs/img/redux.png)](https://redux.js.org/)
[![Jest](docs/img/jest.png)](https://facebook.github.io/jest/)

[Electron](https://electronjs.org/) application boilerplate based on [React](https://reactjs.org/), [Redux](https://redux.js.org/), and [Webpack](https://webpack.js.org/) for rapid application development using [TypeScript](https://www.typescriptlang.org/).

## Install
Clone the repository with Git:

```bash
git clone --depth=1 git@gitlab.com:Robin_f/electron-react-typescript.git <your-project-name>
```

And then install the dependencies:

```bash
cd <your-project-name>
npm install
```

## Usage
Currently, both processes have to be started **simultaneously** in different console tabs:

```bash
npm run renderer-dev
npm run main-dev
```

This will start the application with hot-reload so you can instantly start developing your application.
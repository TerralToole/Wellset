# About

This is a take home test for candidates I am currently screening. If you're just passing by you're welcome to take a
look, but you may not find much value as this project is left in an intentionally mixed state.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Instructions

1. Complete the "Getting Started" section below.
2. After install, look at [tasks.md](./docs/tasks.md)

# Getting Started

## Node Version

For consistency a `.nvmrc` file is in this repo. If you're not familiar with how to use `nvm`, or prefer not to use it,
I recommend you ensure the node version you're using matches that of the files contents. This project was built and
tested with the `.nvmrc` node version.

## Standard Install

1. Fork this repo
2. Clone to your local
3. Run `npm install`
4. Set up environment API URL
   1. Copy the .env example to a local one (e.g. `cp .env .env.local`)
   2. Open `.env.local` and update the API URL with the one you were provided
5. Run `npm start`
    1. On successful build, open: [http://localhost:3000](http://localhost:3000)
6. For more info on scripts see the end of this doc.

## Trouble Shooting

If you are unable to get started due to a dev toolchain issue please reach out.

# Available Scripts

Standard Create React App scripts are present. In order to complete this take home test you _should_ only
need `npm start` and `npm test` which should both be familiar to you.

For completeness, I've included the scripts you can find in `package.json` and their descriptions here:

* `npm start` - Runs app in development mode, should open [http://localhost:3000](http://localhost:3000) automagically
  for you.
* `npm test` - Starts tester
* `npm run build` - available, but not recommended as it's not relevant for this project, but does as described: builds
  a prod version.
* `npm run eject` - available, but not recommended. If you're not familiar with ejecting feel free to check out the
  create-react-app docs.


# Rock - Paper - Scissors

A classic Rock-Paper-Scissors game. Singleplayer versus an AI employing a Game Theory Optimal strategy.  
Deployed at [sundq-rps.netlify.com](https://sundq-rps.netlify.com).

### Built With
The site is built in React using Create-React-App. Feature testing using cypress and unit tests using e2e_training_wheels (mocha/chai).
* [React](https://reactjs.org/)
* [Cypress](https://www.cypress.io/)
* [e2e_training_wheels](https://www.npmjs.com/package/e2e_training_wheels)

## Getting Started

To get a local copy up and running follow the steps outlined below.

### Installation

1. Clone the repo and navigate into it
```sh
git clone https://github.com/sundqvistjohan/rock-paper-scissors.git
cd rock-paper-scissors
```
2. Install packages
```sh
yarn install
```

## Usage

Run local server on localhost:3000
```sh
yarn start
```

Run feature tests
```sh
yarn run cy:open
```

Run unit tests
```sh
yarn run specs
```

## Roadmap

* Add styling
* Add landing page

## License

Distributed under the MIT License.

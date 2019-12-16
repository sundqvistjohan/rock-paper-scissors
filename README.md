
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

## Acknowledgements

In addition to official documentation of the dependencies used the following resources has been used during the creation of this application.


[React-indepth - The React Life Cycle](https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/introduction.html) has been helpful for understanding the life cycle of React components.
https://daveceddia.com/why-not-modify-react-state-directly/
https://stackoverflow.com/questions/46939850/how-to-hide-header-component-in-react-router-dom
https://stackoverflow.com/questions/51109495/how-to-update-parent-state-from-child-component-in-react-send-a-paramater
https://www.freecodecamp.org/forum/t/problem-with-image-path-generated-from-function-in-react/249420/9

## License

Distributed under the MIT License.

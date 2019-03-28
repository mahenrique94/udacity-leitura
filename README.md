# Leitura

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c8669396bab34faa934bfd15d2d3c603)](https://app.codacy.com/app/mahenrique94/udacity-leitura?utm_source=github.com&utm_medium=referral&utm_content=mahenrique94/udacity-leitura&utm_campaign=Badge_Grade_Dashboard)

Project made to finish a second module in React Nanodregree program on Udacity.

## Project dependencies
To do this project, was used some libraries, like:

1. axios
2. babel
3. eslint
4. fontawesome
5. history
6. husky
7. i18next
8. i18next-browser-languagedetector
9. jest
10. normalize
11. prop-types
12. react
13. reactstrap
14. react-i18next
15. react-router
16. react-router-dom
17. react-test-renderer
18. styled-components
19. webpack
20. cypress
21. docz
22. bootstrap
23. enzyme
23. final-form
24. react-final-form
25. immer
26. immutable
27. moment
28. pubsub-js
29. react-notification-system
30. react-notification-system-redux
31. react-redux
32. react-simplemde-editor
33. redux
34. redux-actions
35. redux-devtools-extension
36. redux-immutable
37. redux-logger
38. redux-mock-store
39. redux-saga
40. sort-by
41. lodash

Those are main libraries of the project.

## Setup
To init and configure the project it's very simple, there's a lot of scripts done for a better automatization tasks like those.

### Intall
The first necessary step is to install all project dependencies, you can just run on root source:

```
yarn
```

or

```
npm i
```

Wait all while all dependencies are downloaded and configured.

### API Server
Before start a developer server for the app you need run the API server, first you need do download from the project:

- [reactnd-project-readable-starter](https://github.com/udacity/reactnd-project-readable-starter)

After download has been completed, extract the `.zip` file and go to `api-server` inside root project. Now you just need run:

```
npm i
node server
```

The API server will be avaiable on `http://localhost:3001`.

### Start
After that first step has been done, you can start a development local server with:

```
yarn start
```

or

```
npm start
```

A development server will be started at your localhost laptop or computer.

### Tests
To run all project tests, just run:

```
yarn test
```

or

```
npm test
```

#### It's possible to test your UI by using `Cypress`, there's a three commands:

To test the UI in your terminal, run:

```
yarn cypress
```

or

```
npm cypress
```

To test the UI by using and showing a browser, like chrome, run:

```
yarn cypress:chrome
```

or

```
npm cypress:chrome
```

And, if you want choose a specific test or to see the all possibles tests, run:

```
yarn cypress:open
```

or

```
npm cypress:open
```

### Documentation

It's possible to test the app share components, by using `Docz`

To see a full documentation, you can run:

```
yarn docz:dev
```

or

```
npm docz:dev
```

All matches files will be tested.

### ESLint
If you need check some code format, the project has been configured with ESLint, so you can check through:

```
yarn lint
```

or

```
npm lint
```

If some error was found, just run the same command with `lint:fix` to try fixed it.

Thanks

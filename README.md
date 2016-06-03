# coupons-poc-reactjs

This is a front end for a simple coupon code validation service. It serves as a sample or proof of concept of one possible solution based on React.js. It is not intended for production use, but rather for discovering good organizational practices and tools.


## Requirements

### Node.js

We need to have a current version of Node.js and npm installed. The best option is probably to use a version manager like [nvm](https://github.com/creationix/nvm). Otherwise, follow the instructions at https://docs.npmjs.com/getting-started/installing-node to install or update a recent version.

This project was created using node v6.2.0 with npm v3.8.9.

### REST backend

We also need to have the [Coupons API backend](https://github.com/osoco/coupons-poc-ratpack) running while we run our application. Just start it up in the background. The access details can be configured in `app/config.js` if necessary.

## Usage

After checking out the project (and also after pulling changes that include dependencies), change into the project directory (where package.json is located) and run:

    npm install

This will download all of the dependencies needed.

Start a hot-reloading development server with:

    npm start

Package the JavaScript for production with:

    npm run build

This will write results to `build/dist`. Although the distribution includes an index.html file, it will not work if loaded from the file system because "index.html" is not a valid route within the application. A webserver of some sort is required, for example, 

    python -m SimpleHTTPServer

Run all tests once with:

    npm test

A code coverage report will be generated in build/coverage, although the results seem questionable.

Run tests continuously on change with:

    npm run tdd


## Build tools

These are the main tools we are using to build and run the application. The only one that needs to be installed manually is npm (see [Requirements](#requirements) above).

[npm](https://www.npmjs.com/) is the main build tool used. It handles external dependency management as well as providing a uniform interface for running and building the project.

[Webpack](https://webpack.github.io/) is used for internal dependency management and packaging.

[Babel](https://babeljs.io/) is used for JavaScript compilation, allowing us to use ES6 syntax that isn't yet supported by all browsers.

[Kotatsu](https://github.com/Yomguithereal/kotatsu) lets us simplify the setup of Webpack and Babel a bit, and gives us a hot-reloading development server out of the box. 

### Configuration

There are several different files that configure the build:

* **package.json**: npm project configuration file. Defines scripts for running and building the project using Kotatsu. 
* **webpack.config.js**: Webpack configuration file, passed to Kotatsu.
* **.babelrc**: Babel configuration file used by Kotatsu and Webpack for compiling JavaScript.

### Build dependencies

These are the dependencies we've pulled in with npm for development (they aren't needed at runtime). Unfortunately, package.json doesn't allow comments, so it can be hard to keep track of the purpose of each one.

* kotatsu: easy setup of Webpack and Babel with hot-reloading server
* babel-preset-react: transforms JSX and Flow syntax to standard javascript
* babel-preset-react-hmre: enables hot reloading React classes during development
* clean-webpack-plugin: cleans build folders before building again
* webpack-merge: utility for merging configuration objects in `webpack.config.js`
* sass-loader: compiles scss to css
* node-sass: required by sass-loader
* css-loader: resolves paths in css files, mififies, and supports CSS Modules
* extract-text-webpack-plugin: By default Webpack will bundle css together with javascript. This plugin extracts the css to a separate file. We don't use it in development because it is not compatible with hot module replacement.
* resolve-url-loader: When using sass, resolves `url()` relative to the containing `.scss` file.
* style-loader: Injects `<style>` tags in the DOM. Used during development so styles are hot-reloaded along with modules.
* file-loader: exports static files
* url-loader: can in-line small files as data urls
* babel-plugin-syntax-object-rest-spread, babel-plugin-transform-object-rest-spread: allow using the spread operator for js objects: (...object)
* html-webpack-plugin: Writes an index.html file to the distribution that loads the main js and css files (because their names change every build).
* react-addons-test-utils, isparta-instrumenter-loader, karma, karma-coverage, karma-mocha, karma-phantomjs-launcher, karma-sourcemap-loader, karma-spec-reporter, karma-webpack, karma-chai, mocha, phantomjs-prebuilt, phantomjs-polyfill, chai, chai-immutable, chai-as-promised, dirty-chai, sinon, sinon-chai, enzyme chai-enzyme: Unit test dependencies.


## Testing

For now we have only set up unit testing. These are the tools we decided to go with.

[Karma](https://karma-runner.github.io) is the test runner. For now, we are only going to run the tests on [PhantomJS](http://phantomjs.org/) (a headless implementation of WebKit).

[Mocha](http://mochajs.org/) is the test framework we'll use. It lets us write tests in a specification-like style.

[Chai](http://chaijs.com) is the assertion library we are using. We'll use the Expect BDD style. Additional assertions are available through the plugins chai-immutable (assert over Immutable.js objects), dirty-chai (avoid false test results by requiring matchers to be functions - https://github.com/moll/js-must#asserting-on-property-access), chai-as-promised (makes it easier to assert the result of Promises), sinon-chai (assert results of spies, stubs, and mocks), and chai-enzyme (assertions for React components).

[Sinon](http://sinonjs.org/) is a mocking/spy library.

[Istanbul](https://gotwarlost.github.io/istanbul/) is the code coverage tool we will be using.

[ReactTestUtils](http://facebook.github.io/react/docs/test-utils.html) helps us test React components, although it should rarely be used directly. Rather, use Enzyme.

[Enzyme](http://airbnb.io/enzyme/) provides a more convenient interface for testing React components.

## Application

### Tools

[React](http://facebook.github.io/react/) is of course what we will use to render the GUI for the application.

[Redux](http://redux.js.org/) is the framework we have chosen for the "rest" of the application.

[Immutable](http://facebook.github.io/immutable-js/) helps ensure we don't accidentally modify our application state at the wrong time.

[CSS Modules](https://github.com/gajus/react-css-modules) lets is define CSS for each React component.

[react-router](https://github.com/reactjs/react-router) provides a way to sync the view with the browser URL.

For now we are only using client-side routing. Server-side routing is possible, but requires quite a bit of configuration.

[Swagger JS Client](https://github.com/swagger-api/swagger-js) gives us a service based on a Swagger specification, so we don't have to write it ourselves.

### Runtime dependencies

These are the npm dependencies that are needed at runtime.

* react: The core React library
* react-dom: Renders React virtual DOM to browser DOM
* redux: The core Redux library
* redux-thunk: Allows Redux actions to be functions
* redux-form: Simplifies binding forms to the store
* react-redux: React bindings for Redux
* immutable: Immutable data structures
* node-uuid: UUID generator
* react-router: Associates browser URLs with React components
* react-router-redux: syncs the URL (managed by react-router) with the store so that replaying actions in the debugger also updates the URL correctly.
* react-css-modules: Allows assigning local css styles to React components
* swagger-client: Turns a Swagger contract into a service


## Extras

### Chrome extensions to help with debugging

[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### Editor support

#### Sublime Text Packages

[Babel](https://packagecontrol.io/packages/Babel)

[Babel Snippets](https://packagecontrol.io/packages/Babel%20Snippets)

[Charcoal color scheme](https://packagecontrol.io/packages/Charcoal)

[Oceanic Next Color Scheme](https://packagecontrol.io/packages/Oceanic%20Next%20Color%20Scheme)

## TODO

Look at https://github.com/acdlite/flux-standard-action, redux-act, redux-actions

Look at redial

Look at http://redux.js.org/docs/recipes/ComputingDerivedData.html

Look at normalizr

Look at http://flowtype.org/

Add some real tests

Use local storage

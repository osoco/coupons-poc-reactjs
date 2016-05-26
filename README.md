# coupons-poc-reactjs

This is a front end for a simple coupon code validation service. It serves as a sample or proof of concept of one possible solution based on React.js. It is not intended for production use, but rather for discovering good organizational practices and tools.


## Requirements

### Node.js

We need to have a current version of Node.js and npm installed. The best option is probably to use a version manager like [nvm](https://github.com/creationix/nvm). Otherwise, follow the instructions at https://docs.npmjs.com/getting-started/installing-node to install or update a recent version.

This project was created using node v6.2.0 with npm v3.8.9.

## Usage

Start a hot-reloading development server with:

    npm start

Package the JavaScript for production with:

    npm run-script build

## Build tools

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

TODO: check HtmlwebpackPlugin, CommonsChunkPlugin

## Application

Redux

React

Immutable

CSS Modules

### Runtime dependencies

These are the npm dependencies that are needed at runtime.

* redux: The core Redux library
* react-redux: React bindings for Redux
* immutable: Immutable data structures
* node-uuid: UUID generator
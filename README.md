Front-end Scaffold for Use with [Gulp](http://gulpjs.com/)
================================================================

Includes [CoffeeScript](http://coffeescript.org/), [Webpack](https://webpack.github.io/) for CommonJS-style module wrapping, [Backbone](http://backbonejs.org/) for structure,
[Stylus](http://learnboost.github.io/stylus/) for CSS pre-processing, sourcemaps for CSS and CoffeeScript,
[Handlebars](http://handlebarsjs.com/) for templating, live-reload for automatic page-refreshes during development and Mocha + PhantomJS for unit testing.

Project Setup
-------------
- Install Node
 - [Node.js Installer](http://nodejs.org/)
- Install Gulp globally
 - `sudo npm install -g gulp`
- Clone and cd into the repo
 - `git clone https://github.com/WINTR/gulp-frontend-scaffold.git && cd gulp-frontend-scaffold`
- Then install Gulp task dependencies
 - `npm install`

Development Tasks
-----------------

- For development: `gulp dev` then navigate to `http://localhost:3000` (or IP address).
- For deploy: `gulp build`

This concatinates and minifies all CoffeeScripts and SASS and moves the project into 'dist' for production deploy.

Bower
-----
Bower is used for client-side package management.  Packages installed via bower are then copied over to `vendor` via `gulp bower` and each time you run `gulp dev`.

- To search for packages
 - `bower search {package name}`
- To install a package
 - `bower install {package name} --save`
 - `gulp bower`
 - Add the path to the new lib into the `concat` task in `gulpfile.coffee` and save


Unit Testing
------------
Mocha is used as the default for unit tests.  Via gulp-mocha-phantomjs, unit tests can be run in both the terminal as well as the browser.

- To execute tests via PhantomJS
 - `gulp test`
- To test in browser
 - Run `gulp test`
 - Navigate to `test/html/index.html`
- When running `gulp dev`, tests are automatically re-run on save of either your source or your spec files and should trigger a reload in the browser.


A Few Notes on Folder Structure
-------------------------------

- **Assets** like **images**, **audio**, **webfonts**, **etc** are created in `src/assets` and will automatically be moved over to the **public** folder, mirroring the folder structure where they came from.
- **Scripts** such as **CoffeeScript** and **JavaScript** are placed here and compiled over to public via **Webpack**.  
- **Styles** is where **SASS** files go, and are compiled over to **public** on save.
- **Vendor** is where are vendor sources go, from both **Bower** (via `bower install {package}` and then `gulp bower`) as well as manually.  When changes are made to this directory, the **GruntFile** `concat` task should be updated to include the newly added files
- **Tests** is where your **Mocha** tests and their accompanying html are located.  When developing, test files are **continually evaluated** and, if need be, compiled into `test/spec/spec-runner.js` to be run in the **browser**.

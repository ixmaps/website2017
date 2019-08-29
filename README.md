# ixmaps.ca website

Code for [www.ixmaps.ca](https://www.ixmaps.ca/) website.

## Structure

Website structures is as follows:

```
Home Page (index.php)
[Header]
├── Map (map.php)
├── Learn (learn/)
│   │── Issues (issues.php)
│   │── FAQ (faq.php)
│   │── Glossary (glossary.php)
│   │── Resources (resource.php)
│   └── Supporting Links (supporting-links.php)
├── Contribute
├── Transparency (transparency/)
│   │── 2014 Report (2014-report.php)
│   └── 2013 Report (2013-report.php)
[Footer]
├── About (about.php)
├── Research (research.php)
├── News (news.php)
└── Privacy Policy (privacy.php)
```

Directory structures is as follows:

```
/ (document root)
├── _assets
│   ├── __build
│   │   ├── bower_components
│   │   └── node_modules
│   ├── __src
│   │   ├── img
│   │   ├── js
│   │   ├── sass
│   │   └── semantic-ui
│   ├── __styleguide
│   ├── css
│   ├── img
│   └── js
├── _includes
├── learn
└── transparency
```

Website pages are in `/`. Global header, nav, and footer as well as page-specific components are in `_includes`. Papers, presentations, and reports are located in `docs/`. `_assets` has two key purposes: 1) to provide a single location for all front-end assets to reside (styles, images, and scripts in `_assets/css`, `_assets/img`, and `_assets/js` respectively), and 2) to house the build tooling automating the development process.

`_assets/__build` and `_assets/__src` directories work in tandem to generate the content for the front-end asset directories. Assets ideally **should not** be added to the core `_assets` subdirectories, but instead should be added to `_assets/__src` in order to be included in the build process resulting in optimized and/or combined files for better deployment.

In most cases, whatever is included in the subdirectories of `_assets/__src` will be replicated in the core `_assets` subdirectories (i.e., subdirectories will be retained and created in the destination). Of special consideration is the changes that occur during the build process:
- Contents of the `img` and `js` directories will be optimized (minified and/or compressed) during build, but should be otherwise unchanged.
- Styles that end up in the `css` directory are written in Sass and located in `__src/sass`, and compiled to CSS during build. The grunt build process also includes some elements of cross-browser compatibility by running the Autoprefixer task against the generated stylesheets. This uses the list of browsers from the `_assets/__build/browserlist` file to determine what additional styles can be automatically added to increase browser version compatibility. For more information on the list of browsers, please see [https://github.com/ai/browserslist](https://github.com/ai/browserslist)

Directories that begin with two underscores (e.g., `__src`) are for development and **do not need to be deployed to the live site**.

## Development

The site is built with PHP and a [Grunt](http://gruntjs.com/) task to combine the grunt watch task and a PHP server.

### Dependencies

- [npm and Node.js](https://nodejs.org/en/download/)
- [Grunt](http://gruntjs.com/)
- [Bower](https://bower.io/)

### Getting set up

Install [npm and Node.js](https://nodejs.org/en/download/) or make sure you have newer versions already set up:

```
$ npm install npm@latest -g
$ node -v
v7.2.1
$ npm -v
4.3.0
```

Install [Grunt](http://gruntjs.com/) and [Bower](https://bower.io/) globally:

```
$ npm install -g grunt-cli bower
```

Clone and work in this repo to make changes:

```
$ git clone git@github.com:ixmaps/website2017.git /var/www/website
$ cd website
```

You'll need to use the example config to avoid errors:

```
$ cp config.example.json config.json
```
(note that you'll need to modify the config.json to include eg the Google Maps API key

The **first time** you should install all the packages used:

```
$ cd _assets/__build/
$ npm install
$ bower install
$ grunt
```

### Ongoing Development

In general you should be able to use Grunt's `phpwatch` to test changes in your browser:

```
$ grunt phpwatch
```

- Running `grunt` with no arguments will run a complete build and preparation -- including copying fresh versions of assets from bower_components (e.g., jQuery) and regenerating the custom version of Modernizr.
- `grunt build` will run a full build without coping the external assets (but **will** try optimising and copying all assets from the `_assets/__src` directory).
- `grunt watch` runs the same tasks as `build` but does so continuously watching for file changes.
- `grunt phpwatch` is the same build process and file change monitoring as the `watch` task, but also runs a PHP server for local testing and development.

Note: running `grunt --help` will give a list of these tasks, but will also include the subtasks that make them up, the use of which may have unexpected results and is not recommended unless you really know what you're doing.

An example development workflow:
1. run `grunt build` in the `__build` directory
1. make changes in the `__src` folder in your preferred text editor
1. run `grunt phpwatch` to can see a live preview

## Git practices

Please commit to `master` only (prod should be locked). Master will act as the staging branch, to be merged to `prod` and pulled to server as required.

Issues lifecycle is fairly hands off - start your own issues, close your own issues, complete and close other's issues (with encouragement to reopen) are all acceptable practices. If resolving another user's more complex issue, preferred practice is to @mention the issuer to request closure if uncertain

## Server setup steps

Server
(Legacy?)
```
git clone git@github.com:ixmaps/website2017.git ixmaps/
cp config.example.json config.json
nano config.json (add key and change php-backend)
ln -s /var/www/php-backend/application/ application/
cp -R /var/www/ixmaps-old/IXmapsClient /var/www/ixmaps/
cp -R /var/www/ixmaps-old/piwik/ /var/www/ixmaps/ (permissions issues)
git submodule init
git submodule update
chmod -R www-data piwik
chgrp -R www-data piwki
npm install
bower install
cd _assets/__build
grunt build (every time )
```


## License
Copyright (C) 2019 IXmaps.
This website and the repository [github.com/ixmaps/website2017](https://github.com/ixmaps/webite2017) are licensed under a GNU AGPL v3.0 license. This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3 of the License.

These files are distributed in the hope that they will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details [gnu.org/licenses](https://gnu.org/licenses/agpl.html).


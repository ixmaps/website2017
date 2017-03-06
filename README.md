# ixmaps.ca website

Code for [**dev.**ixmaps.ca](https://dev.ixmaps.ca/) website.

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

CSS, SASS styleguide, JS, and images are in `_assets`. Global header, nav, and footer as well as page-specific components are in `_includes`. Papers, presentations, and reports are located in `docs/`. The `_assets` directory has two key purposes, firstly to provide a single location for all front-end assets to reside (styles, images, and scripts in `_assets/css`, `_assets/img`, and `_assets/js` respectively), and secondly to house the build tooling used to automate aspects of the development process.

The `_assets/__build` and `_assets/__src` directories work in tandem to generate the content for the front-end asset directories. This means that assets ideally should not be added to the core `_assets` subdirectories, but should instead be added to those located in `_assets/__src` so that they can be included in the build process resulting in optimized and/or combined files for better deployment. In most cases, whatever is included in the subdirectories of `_assets/__src` will be replicated in the core `_assets` subdirectories (i.e., subdirectories will be retained and created in the destination).

Of special consideration is the changes that occur during the build process. With the `img` and `js` directories, they will be optimized (minified and/or compressed) when copied to their destination, but should be otherwise unchanged. In the case of the styles that end up in the `css` directory, those are to be located in the `__src/sass` directory, written in Sass and compiled to CSS by grunt. The grunt build process also includes some elements of cross-browser compatibility by running the Autoprefixer task against the generated stylesheets. This uses the list of browsers from the `_assets/__build/browserlist` file to determine what additional styles can be automatically added to increase browser version compatibility. For more information on the list of browsers, please see [https://github.com/ai/browserslist](https://github.com/ai/browserslist)

Also note that directories that begin with two underscores ('__src') for example are for development and don't need to be uploaded to the live site. 

## Development

The site is built with PHP and a grunt task has been included to combine the grunt watch task and a PHP server.

- Running `grunt` with no arguments will run a complete build and preparation -- including copying fresh versions of assets from bower_components (e.g., jQuery) and regenerating the custom version of Modernizr.
- `grunt build` will run a full build without coping the external assets (but **will** try optimising and copying all assets from the `_assets/__src` directory).
- `grunt watch` runs the same tasks as `build` but does so continuously watching for file changes.
- `grunt phpwatch` is the same build process and file change monitoring as the `watch` task, but also runs a PHP server for local testing and development.

Note: running `grunt --help` will give a list of these tasks, but will also include the subtasks that make them up, the use of which may have unexpected results and is not recommended unless you really know what you're doing.

An example of the workflow:  
1. run 'grunt build' on the '__build' directory  
2. open up the '__src' folder in a text editor to adjust things  
3. run 'phpwatch' to can see a live preview  

### Dependencies

- Node/npm
- Bower
- Grunt

### Installation

Run the following commands in a terminal from the `/_assets/__build/` folder.
- run `npm install` to include backend dependencies
- run `bower install` to include frontend dependencies
- run `grunt` to build initial project

### Usage

For continued development, run `grunt phpwatch` from the `/_assets/__build/` directory.

## Git practices

Please commit to `master` only (prod should be locked). Master will act as the staging branch, to be merged to `prod` and pulled to server as required.

Issues lifecycle is fairly hands off - start your own issues, close your own issues, complete and close other's issues (with encouragement to reopen) are all acceptable practices. If resolving another user's more complex issue, preferred practice is to @mention the issuer to request closure if uncertain

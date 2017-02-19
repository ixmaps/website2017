# ixmaps.ca Website

Code for [**dev.**ixmaps.ca](https://dev.ixmaps.ca/) website.

## Structure

Website structures is as follows:

```
Home Page (index.php)
[Header]
├── Map (map.php) <-- currently points to old "Explore" page
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

CSS, SASS styleguide, JS, and images are in `_assets`. Global header, nav, and footer as well as page-specific components are in `_includes`. Papers, presentations, and reports are located in `docs/`. 

## Development

The site is built with PHP and a grunt task has been included to combine the grunt watch task and a PHP server.

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

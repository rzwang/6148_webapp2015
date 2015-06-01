hitch
==========

Wistful Worldly Wonderers

http://hitcharide.herokuapp.com


##Library/API Sources:
* Bootstrap: http://getbootstrap.com
* jQuery: http://jquery.com
* Passport: http://passportjs.org
* Google Places API: https://developers.google.com/places/documentation/autocomplete
* Mask: http://igorescobar.github.io/jQuery-Mask-Plugin
* Typed: http://www.mattboldt.com/demos/typed-js
* PickaDate: http://amsul.ca/pickadate.js
* Skrollr: https://github.com/Prinzhorn/skrollr
* OpenSans: http://www.google.com/fonts/specimen/Open+Sans

##Personal Notes:
####Backend####
    * controller: deals with DB communications
    * model: mongoose Schema, defined "request" and "user" data models

####Frontend####
    * public: houses the images used on my webpages, javascript files, sass/css files for my webpages
    * routes/index.js: deals with the routing of each webpage
    * views: jade/html files

####Other Files####
    * node_modules: where all the lib files live
    * passport: utilizing passport API in personal webpages
    * app.js: "require" statements, configures passport, connects to DB, sets port
    * package.json: versions, starting call

####Technologies Used####
* Express
* mongoose, mongoDB
* Node.js
* Jade/HTML 
* Sass/CSS

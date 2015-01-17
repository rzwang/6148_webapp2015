// var mongoose = require('mongoose');

// // THIS IS A SAMPLE MODELS.JS FILE

// // Define a schema
// var photoSchema = mongoose.Schema({
//     caption: String,
//     url: String
// });

// // Compile the scheme into a model
// var Photo = mongoose.model('Photo', photoSchema);

// var checkLength = function(s) {
//     return s.length > 0;
// };


// Photo.schema.path('caption').validate(
//     checkLength, "Caption cannot be empty");

// Photo.schema.path('url').validate(
//     checkLength, "URL cannot be empty");

// models.Photo.findOne(
//     {_id: photoID},
//     function(err, result) { // THIS IS A CALLBACK
//         console.log(result);
//         res.render('photo',
//             { photo: result });
// });

// var newPhoto = new models.Photo({
//     caption: req.body['submitted-url'],
//     url: req.body['caption']
// });

// newPhoto.save(function(err, result) {
//    res.redirect('/photos/' + result._id)
// });



// exports.Photo = Photo;

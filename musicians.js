var mongoose = require('mongoose'),
Musician = mongoose.model('Musician');
exports.findAll = function(req, res){
  Musician.find({},function(err, results) {
    return res.send(results);
  });
};
exports.findById = function(req, res){
  var id = req.params.id;
  Musician.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};
exports.add = function(req, res) {
  Musician.create(req.body, function (err, musician) {
    if (err) return console.log(err);
    return res.send(musician);
  });
}
exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;
   Musician.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d musicians', numberAffected);
      res.send(202);
  });
}
exports.delete = function(req, res){
  var id = req.params.id;
  Musician.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  Musician.create(
    { "name": "movie1", "rating": "2", "month": "jan" },
    { "name": "movie2.","rating": "3", "month": "feb" },
    { "name": "movie3", "rating": "4", "month": "mar" },
    { "name": "movie4", "rating": "5", "month": "april" }
  , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};
var deleteRequest = function(req, res){
    // DELETE THE REQUEST
    req.user.hasReq = false;
    req.user.save();
    res.redirect('/request');
};

module.exports = deleteRequest;

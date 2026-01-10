exports.public = (req, res) => {
    res.json({ message: 'anyone can access'});
};

exports.profile = (req, res) => {
    res.json({ message: 'protected profile'})
};
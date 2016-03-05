var multer  = require('multer')
var upload = multer({dest:'../uploads'})
module.exports = function (app) {
    app.post('/files/upload',upload.single('file'),function (req,res,next) {
        var file = req.file;
        res.render('index',{
            title:'Hello',
            filesize:file.size
        })
    });
    app.get('/',function (req,res,next) {
        res.render('index',{
            title:'Hello',
        })
    })
};

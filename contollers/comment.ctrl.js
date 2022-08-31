const Project = require('../models/project');

// add a new comment to project
createComment = (req, res) => {
    const {body} = req

    if (body.name == null || body.name === "") {
        res.sendStatus(400)
    }

    Project.updateOne({name: req.params.project}, {
        $push: {
            Comment: {
                Comment: body.comment,
                time: body.time,
                img: body.img,
            }
        }
    })
        .then(() => {
            Project.findOne({name: req.params.project})
                .then(docs => res.json(docs))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

module.exports = {
    createComment,
}
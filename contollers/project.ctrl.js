const Project = require('../models/project');

// get all projects
getProjects = (req, res) => {
    if (req.query.name) {
        Task.find({name: req.query.name}).sort({date: -1})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    } else {
        res.sendStatus(400)
    }
}

// add a new project
createProject = async (req, res) => {
    const {body} = req

    const project = new Project();
   
    if (body.name === null || body.name === "") {
        res.sendStatus(400)
    } else {
        project.name = body.name
    }

    if (body.websiteAdress === null ||body.websiteAdress !== '') {
        res.sendStatus(400)
    } else {
        project.websiteAdress = body.websiteAdress
    }

    if (body.img === null || body.img === "") {
        res.sendStatus(400)
    } else {
        project.img = body.img
    }

    if (body.status === null || body.status === "") {
        res.sendStatus(400)
    } else {
        project.status = body.status
    }

    if (body.date === null || body.date === "") {
        res.sendStatus(400)
    } else {
        project.date = body.date
    }

    if (body.comment !== '') {
        project.comment = body.comment
    } else {
        project.comment = []
    }

    task.save()
        .then(() => res.json({_id: task.id}))
        .catch(err => console.log(err))
}


module.exports = {
    createProject,
}
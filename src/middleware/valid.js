const authorModel = require('../models/authorModel');

// amitvsk //Kirtan-G
const validateAuthor = async function (req, res, next) {
    try {
        let data = req.body
        const { firstname, lastname, title, email, password } = data

        if (Object.keys(data).length != 0) {
            if (data.firstname === undefined) {
                return res.status(400).send({ status: false, msg: "Firstname Missing !!" });
            }
            if (data.lastname === undefined) {
                return res.status(400).send({ status: false, msg: "Lastname Missing !!" });
            }
            if (data.title === undefined) {
                return res.status(400).send({ status: false, msg: "Title Missing!!" });
            }
            if (data.email === undefined) {
                return res.status(400).send({ status: false, msg: "Email Missing !!" });
            }
            if (data.password === undefined) {
                return res.status(400).send({ status: false, msg: "Password Missing !!" });
            }
        }
        else {
            return res.status(400).send({ msg: "Mandatory field Missing!!" })
        }

        if (Object.values(firstname).length <= 0) {
            return res.status(400).send("The firstname is required");
        }
        if (Object.values(lastname).length <= 0) {
            return res.status(400).send("The lastname is required");
        }
        if (Object.values(title).length <= 0) {
            return res.status(400).send("The title is required");
        }
        if (Object.values(email).length <= 0) {
            return res.status(400).send("The email is required and unique");
        }
        if (Object.values(password).length <= 0) {
            return res.status(400).send("The password is required");
        } else {
            next()
        }
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message });
    }
}
module.exports.validateAuthor = validateAuthor;

// amitvsk //Kirtan-G //Salman-110
const validateblog = async function (req, res, next) {
    try {
        let data = req.body
        const { title, body, authorId, category } = data

        if (Object.keys(data).length != 0) {
            if (data.title === undefined) {
                return res.status(400).send({ status: false, msg: "TITLE MISSING!!" });
            }
            if (data.body === undefined) {
                return res.status(400).send({ status: false, msg: "BODY MISSING!!" });
            }
            if (data.authorId === undefined) {
                return res.status(400).send({ status: false, msg: "AUTHORID MISSSING!!" });
            }
            if (data.category === undefined) {
                return res.status(400).send({ status: false, msg: "ENTER VALID AUTHORID!!!" });
            }
        }
        else {
            return res.status(400).send({ msg: "Mandatory field Missing!!" });
        }

        if (Object.values(title).length <= 0) {
            return res.status(400).send({status:false, msg:"Title is Required!!"});
        }
        if (Object.values(body).length <= 0) {
            return res.status(400).send({status:false, msg:"blog body is Required!!"});
        }
        if (Object.values(authorId).length <= 0) {
            return res.status(400).send({status:false, msg:"Author id is Required!!"});
        }

        let authorid = await authorModel.findById(authorId)
        if (!authorid) {
            return res.status(400).send('Enter a valid Author id!!');
        }
        if (Object.values(category).length <= 0) {
            return res.status(400).send({status:false, msg:"Category is Required!!"});
        } else {
            next()
        }
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}
module.exports.validateblog = validateblog;
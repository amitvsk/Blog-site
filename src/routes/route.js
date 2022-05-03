const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
const blogsController = require("../controllers/blogController");
const { validateAuthor, validateblog } = require('../middleware/valid');
const { Authentication, Authrization,qauth } = require('../middleware/auth');


router.post("/blogs", Authentication, validateblog, blogsController.createBlog);

router.delete("/blogs/:blogId", Authentication, Authrization, blogsController.deleteBlogs);


router.put("/blogs/:blogId", Authrization, blogsController.updateblogs);

router.delete("/blogs", Authentication,qauth, blogsController.queryDeleted );


router.get("/blogs", Authentication, blogsController.getBlogs);


router.post('/login', authorController.authorLogin);

router.post("/authors", validateAuthor, authorController.createauthor);

module.exports = router;

const express=require("express")
const {blogPage, addBlog, allBlog} = require("../controllers/blog-controle")
const information = require("../middleware/detailes")


const blog=express()

blog.get('/blog/create',blogPage)
blog.post('/blog/create',information,addBlog)
blog.get('/blog/blogs',allBlog)


module.exports=blog

const express=require("express")
const {blogPage, addBlog, allBlog, updateBlog, deleteBlog, blogDetaile, blogs} = require("../controllers/blog-controle")
const information = require("../middleware/detailes")


const blog=express()

blog.get('/blog/create',blogPage)
blog.post('/blog/create',information,addBlog)
blog.get('/blog/blogs',allBlog)
blog.get('/blog',blogs)
blog.get('/blogs',blogDetaile)
// blog.patch('/blog/edit/:id',updateBlog)
// blog.delete('/blog/delete/:id',deleteBlog)

module.exports=blog

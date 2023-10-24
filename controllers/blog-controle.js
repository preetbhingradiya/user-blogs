const Blog = require("../models/Blog.schema");
const User = require("../models/user.schema");

const blogPage = async (req, res) => {
  let { id,role } = req.cookies;

  if (id && role=="admin" ) {
    res.render("blog");
  } else {
    res.send("You are not authorized to access this page");
  }
};

const addBlog = async (req, res) => {

  let {id}=req.cookies
  let user=await User.findById(id)

  let { title, content, category, image } = req.body;
  let blog=await Blog.create({ title, content, category, image,author:user.username });
  res.cookie("blogId",blog._id).send(`blog created by ${user.username}`);
};

const allBlog=async(req,res)=>{
    let {category}=req.query
    if(category){
        let blog=await Blog.find({category})
        res.send(blog)
    }
    else{
        let blog=await Blog.find()
        res.send(blog)
    }

}

module.exports = { blogPage, addBlog,allBlog };

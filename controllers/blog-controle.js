const Blog = require("../models/Blog.schema");
const jwt = require("jsonwebtoken");
const User = require("../models/user.schema");

const blogPage = async (req, res) => {
  let { token } = req.cookies;

  const decode = jwt.verify(token, "sdfguikmnfchjwio");
  req.data = await User.findOne({ role: decode.id });

  if (token && req.data.role == "admin") {
    res.render("blog");
  } else {
    res.send("You are not authorized to access this page");
  }
};

const addBlog = async (req, res) => {
  let { token } = req.cookies;
  const decode = jwt.verify(token, "sdfguikmnfchjwio");
  req.data = await User.findOne({ role: decode.id });

  let { title, content, category, image } = req.body;
   await Blog.create({ title, content, category, image, author:req.data.username });
  res.send(`blog created by [${req.data.username}]`);
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

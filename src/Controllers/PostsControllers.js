const Post = require(".././models/Post");

module.exports = {

    async send (req, res) { 
        const { orignalname: name, size, filename:key, location: url = '' } = req.file;
       
        const post = await Post.create({
            name,
            size,
            key,
            url
        });
        return res.json(post);
    },
    async reads (req, res) {
        const post = await Post.find();
    
        return res.json(post);
    },
     async del (req, res) {
        const post = await Post.findById(req.params.id);
        
        await post.remove();
        return res.send();
    },
}
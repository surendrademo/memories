import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    PostMessage.find().then((allPosts) => {
        console.log(allPosts, "posts are there")
        res.status(200).json(allPosts)
    }).catch((err) => res.status(404).json({ message: err }))
    // res.status(404)
    // res.end()
    try {
        // res.status(201).json(allPosts)
        // const postMessages = await PostMessage.select()
        // console.log(postMessages, "pm")
        // res.status(200).json({ a: 1, b: 2 });
        // res.redirect("/posts")
        // res.send()
    } catch (error) {
        console.log("error")
    }
}

export const createPost = async (req, res) => {
    const { title, message, creator, selectedFile, tags } = req.body;
    console.log("createPosts", title, message, creator, selectedFile, tags)
    // res.status(404)
    // res.end()
    // const newPostMessage = new PostMessage({
    //     title: title, message: message, selectedFile: selectedFile,
    //     creator: creator, tags: tags
    // })
    try {
        // await newPostMessage.save();
        // console.log("hello ---")
        // res.status(200).json(newPostMessage)
        // res.json({ message: req.body })
        // res.end()
        if (!title || !creator || !message || !selectedFile || !tags) {
            return res.status(422).json({ error: "plz fill all filed properly" })
        }

        PostMessage.findOne({ message: message }).then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "message already exist" });
            }
            const user = new PostMessage({ title, message, creator, selectedFile, tags })
            user.save().then(() => {
                res.status(201).json({ message: 'Post created and store in database' })
            }).catch((err) => {
                res.status(500).json({ error: 'failed to creating post' })
            })
        }).catch(err => { console.log(err) })
    }
    catch (error) {
        console.log("error in server in create posts")
        res.status(410).json({ message: error.message })
    }
}
import PostModel from "../Models/Posts.Model.js"


// Get all datas
export const getDatas = async (req, res) => {
    try{
        const datas = await PostModel.find();
        res.status(200).json(datas);
    }catch( err){
        res.status(404).json(err)
    }
}


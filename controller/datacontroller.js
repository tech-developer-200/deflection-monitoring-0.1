const tempdef = require('../models/mymodels.js')


const  getdata = async (req,res) => {
    try{
        const td1 = await tempdef.find({}).sort({_id:-1}).limit(1);;
        res.status(200).json(td1[0]);
    } catch(error){
        console.log('Cannot find any data');
    }
}

const postdata = async (req,res) => {
    try{
        const data = req.body;
        const data2 = await tempdef.create(data);
        res.status(201).json({message:'data stored successfully'});
    } catch(error){
        res.status(400).json({message:'Unable to stored data in database'});
    }
}



const feeddata = async (req,res) => {
    try{
        const t1 = (35 + 2*Math.random()*(Math.random>5?1:-1)).toFixed(2);
        const t2 = (35 + 2*Math.random()*(Math.random>5?1:-1)).toFixed(2);
        const t3 = (35 + 2*Math.random()*(Math.random>5?1:-1)).toFixed(2);
        const td1 = await tempdef.create({temp1:t1,temp2:t2,temp3:t3});
        res.status(201).json({'message': 'data added successfully', td1});
    } catch(error){
        console.log('cannot feed data into db');
        res.status(400).json(error);
    }
}

module.exports = {getdata, feeddata, postdata};
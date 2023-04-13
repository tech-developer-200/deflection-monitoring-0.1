const childprocess = require('child_process');
const {io} = require('./serversocket.js')
const tempdef = require('./models/mymodels.js')

const PredictEmit = (temp1, temp2, temp3, temp4)=> {
    const spawn = childprocess.spawn;
    const process = spawn('python', ['./temp.py',temp1,temp2,temp3,temp4]);
    let mypredict;
    process.stdout.on('data', async (data)=> {
        mypredict = (Number(new TextDecoder().decode(data))*0.001).toFixed(3);
        // console.log(mypredict)
        let today = new Date();
        let mydate= (today.getDate())+"-"+(today.getMonth()+1)+"-"+(today.getFullYear());
        let mytime= (today.getHours())+":"+(today.getMinutes())+":"+(today.getSeconds());
        let td_data = {deflection: mypredict, temp1, temp2, temp3, temp4, date: mydate, time : mytime};
        // console.log(td_data);
        io.sockets.emit('deflection_data', td_data);
        try{
            let sentdata = await tempdef.create(td_data);
            console.log(`data sent successfully : ${td_data}`);
        } catch{
            console.log('Unable to send data to database');
        }
    })
}

module.exports =  {PredictEmit};
const {generateToken} = require('../services/auth')
const fileUtil = require('../services/file')


module.exports.createToDo = async (req, res) => {
    try {
      fileUtil.fileExists(req.body.CNIC).then(exists => {
          if(!exists){
              fileUtil.createFile(req.body.CNIC).then(result => {
                  res.json({success: true})
              }).catch(err => {
                  console.error(err) 
                  res.json({success: false})
              })
          }else{
              res.json({success: true})
          }
      }).catch(err => {
          console.error(err)
          res.json({success: false})
      })  
    } catch(err) {
        console.error(err)
        res.json({success: false})
    }  
}


module.exports.addToDo = async (req, res) => {
    try {
        const csvLine = `\n${req.body.title},${req.body.desc}`
        fileUtil.appendToFile(req.body.CNIC, csvLine).then(result => {
            fileUtil.readFile(req.body.CNIC).then(list => {
                res.json({success: true,list: list})
            }).catch(error => {
                console.log(error);
                res.json({success: false})
            })
            
        }).catch(error => {
            console.log(error);
            res.json({success: false})
        })
      } catch (error) {
        console.error(`Got an error trying to append to a file: ${error.message}`);
        res.json({success: false})
      }
}

  
const {Slide} = require('../models')

class SlideController {
  static slide(req,res,next) {
    Slide.findOne({
      where: {
        current: true
      }
    })
      .then(slides=>{
        res.status(200).json(slides)
      })
      .catch(error=>{
        next(err)
      })
  }
  static updateCurrent(req,res,next) {
    console.log(req.body)
    Slide.update({current: false},{
      where: {
        id: req.body.old
      }
    })
      .then(updatedold=>{
        return Slide.update({current: true},{
          where: {
            id: req.body.current
          }
        })
      })
      .then(updatednew=>{
        console.log(updatednew)
        res.status(200).json(updatednew)
      })
      .catch(error=>{
        next(error)
      })
  }
}

module.exports = SlideController
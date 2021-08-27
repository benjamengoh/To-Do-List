
exports.getDate = function(){
    const today = new Date()
    const options = {
        weekday: 'long', 
        month: 'long',
        day: 'numeric' 
    }
    return today.toLocaleDateString("en-US", options)
}

exports.getDay = function(){
    const today = new Date()
    const options = {
        weekday: 'long', 
        month: 'long',
        day: 'numeric' 
    }
   return  today.toLocaleDateString("en-US", options)

}

//
// app.js 
// const date = require(__dirname + "/date.js")  <now that we have successfully exports 2 functions under 
//
// calling function at app.js
// let day = date.getDate()
// depending on what options you like to use


// module.exports = getDate;
// module
// function getDate(){
//     let today = new Date()
//     let options = {
//         weekday: 'long', 
//         month: 'long',s
//         day: 'numeric' 
//     }
//     let day = today.toLocaleDateString("en-US", options)
//
//     return day
// }
//
// app.js
// const date = require(__dirname + "/date.js")
//
// calling function at app.js
// let day = date()
//

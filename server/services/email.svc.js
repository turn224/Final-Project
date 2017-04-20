// var sg = require("sendgrid")(process.env.SENDGRID_SECRET_KEY);


// exports.sendEmail = function (to, subject, content) {
//     var request = makeRequest(to, subject, content);
//     //With promise
//     sg.API(request)
//         .then(response => {
//             console.log(response.statusCode);
//             console.log(response.body);
//             console.log(response.headers);
//         })
//         .catch(error => {
//             //error is an instance of SendGridError
//             //The full response is attached to error.response
//             console.log(error.response.statusCode);
//         });
// }

var sg = require('sendgrid')(process.env.SENDGRID_SECRET_KEY);

exports.sendEmail = function (to, subject, fromEmail, content) {
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: to,
                        },
                    ],
                    subject: subject,
                },
            ],
            from: {
                email: fromEmail,
            },
            content: [
                {
                    type: 'text/plain',
                    value: content,
                },
            ],
        },
    });
   return sg.API(request);
};

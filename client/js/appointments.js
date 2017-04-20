angular.module('HairSmoothieBar.appointments', [])  
  
  flBooking({
    targetEl: document.querySelector('.booking-target'),
    autofillUser: 'HairSmoothieBar',
    autofillEmail: 'HairSmoothieBar@gmail.com',
    timezone: {
      timezone: 'Europe/London',
      utc_offset: 0,
    },
    createBooking: data => { console.log(data); return Promise.resolve(data) }, // must return a promise 
    getEvents: data => ({
        "data": [
          {
            "start": "2016-11-02T12:00:00.000Z",
            "end": "2016-11-02T13:00:00.000Z"
          }
        ]
      }),
  });
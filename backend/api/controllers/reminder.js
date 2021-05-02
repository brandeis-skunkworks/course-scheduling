module.exports = {

  friendlyName: 'Professor Reminder',

  description: 'Look up the specified user and remind them to send their preferences',

  inputs: {
    professorId: {
      description: 'The ID of the user to look up.',
      // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
      // if the `userId` parameter is not a number.
      type: 'number',
      // By making the `userId` parameter required, Sails will automatically respond with
      // `res.badRequest` if it's left out.
      required: true
    }
  },

  exits: {
    // success: {
    //   responseType: 'view',
    //   viewTemplatePath: 'pages/welcome'
    // },
    // notFound: {
    //   description: 'No user with the specified ID was found in the database.',
    //   responseType: 'notFound'
    // }
  },

  fn: async function ({professorId}) {

    sails.log('Running custom action... (`professor reminder`) with professor ID: ' + professorId);
    
    // Look up the user whose ID was specified in the request.
    // Note that we don't have to validate that `userId` is a number;
    // the machine runner does this for us and returns `badRequest`
    // if validation fails.
    var professor = await Professor.findOne({ id: professorId });

    // If no user was found, respond "notFound" (like calling `res.notFound()`)
    if (!professor) { throw 'notFound'; }

    // Display a personalized welcome view.
    return;
    //  {
    //   name: user.name
    // };
  }

};



// friendlyName: 'Reminder',


// description: 'Reminder something.',


// inputs: {

// },


// exits: {

// },


// fn: async function (inputs) {

//   sails.log('Running custom controller action (professor reminder)');

//   // All done.
//   return;

// }
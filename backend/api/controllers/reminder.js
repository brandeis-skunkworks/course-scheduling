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
  },

  fn: async function ({professorId}) {

    // Look up the user whose ID was specified in the request.
    // Note that we don't have to validate that `userId` is a number;
    // the machine runner does this for us and returns `badRequest`
    // if validation fails.

    var professor = await Professor.findOne({ id: professorId });

    // await sails.helpers.sendTemplateEmail.with({
    //   template: 'email-professor-reminder',
    //   templateData: {
    //     user: professor
    //   },
    //   to: professor.email
    // });


  return;
    // const { exec } = require("child_process");
    // exec("echo \"When would you like to teach?\""); //, (error, stdout, stderr));
    // The following is what was recommended to me to send an email through the command line. We just need a way to call it from this code
    // "echo "When would you like to teach?" | mail -s "Pick your course time" -S "from=donotreply@cs.brandeis.edu" pollack@brandeis.edu"
  }

};

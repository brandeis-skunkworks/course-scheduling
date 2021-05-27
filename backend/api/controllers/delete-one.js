module.exports = {
  friendlyName: "Delete one",

  description: "",

  inputs: {
    courseName: {
      description: "The ID of the user to look up.",
      type: "string",
      required: true,
    },
  },

  exits: {},

  fn: async function ({ courseName }) {
    console.log(courseName);
    await Course.destroy({ name: courseName });

    // All done.
    return;
  },
};

module.exports = {
  friendlyName: "Delete all",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    await Course.destroy({});
    // All done.

    return;
  },
};

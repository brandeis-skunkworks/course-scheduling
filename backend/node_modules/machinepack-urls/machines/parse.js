module.exports = {


  friendlyName: 'Parse URL',


  description: 'Parse metadata from a URL.',


  sync: true,


  sideEffects: 'cacheable',


  inputs: {

    url: {
      description: 'The URL to parse.',
      example: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash',
      required: true
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Parsed URL',
      outputDescription: 'Information obtained by parsing the input URL.',
      outputExample: {
        protocol: 'http:',
        auth: 'user:pass',
        port: 8080,
        hostname: 'host.com',
        hash: 'hash',
        search: '?query=string',
        pathname: '/p/a/t/h',
        path: '/p/a/t/h?query=string'
      }
    }

  },


  fn: function(inputs, exits) {

    // Import `url`.
    var URL = require('url');

    // Use the `parse` function of the `url` package to get information about the given URL.
    var parsedUrl = URL.parse(inputs.url);

    // Attempt to infer port if it doesn't exist.
    if (!parsedUrl.port) {
      if (parsedUrl.protocol === 'https:') {
        parsedUrl.port = 443;
      }
      else {
        parsedUrl.port = 80;
      }
    }

    // Return the parsed URL info through the `success` exit.
    return exits.success(parsedUrl);
  },

};

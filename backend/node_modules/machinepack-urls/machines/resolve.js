module.exports = {


  friendlyName: 'Resolve URL',


  description: 'Build a sanitized, fully-qualified version of the provided URL.',


  extendedDescription:
  'Given a URL, this returns a fully-qualified URL with trailing slashes stripped off.  It also infers a protocol, if necessary.  '+
  'For example, if a valid protocol is provided (e.g. "https://") and the original URL contains no trailing slashes, the URL '+
  'returned will be identical to what was passed in.  If the provided URL begins with "//", it will be replaced with "http://".  '+
  'If the provided URL does not start with a usable protocol (e.g. "google.com"), then "http://" will be prepended.  If the URL '+
  'cannot be sanitized (e.g. if it is missing a hostname, or altogether malformed), then the `error` exit will be triggered.  '+
  'In other words, if `/foo/bar` is passed in as the URL (and assuming the optional base URL is not provided), then this machine '+
  'will fail.\n'+
  '\n'+
  '### Resolving relative to a base URL\n'+
  'Optionally, this machine _also_ allows a base URL (`baseUrl`) to be provided.  This allows a URL path (like `/foo/bar`) to be '+
  'provided as the primary URL, as long as a valid URL with a hostname is provided as the base URL.  To stick with our example from '+
  'above, if `/foo/bar` is passed in as the primary URL (`url`), and a valid base URL-- say, `api.example.com/pets` _is also provided_, '+
  'then, instead of failing, this machine will return `http://api.example.com/pets/foo/bar`.\n'+
  '\n'+
  '### URL encoding\n'+
  '> This also ensures that the provided URL strings do not contain invalid characters by escaping spaces as `%20`, etc.\n'+
  '> See [the Node.js docs](https://nodejs.org/api/url.html#url_escaped_characters) for reference.'+
  '',


  sync: true,


  sideEffects: 'cacheable',


  inputs: {

    url: {
      friendlyName: 'URL',
      description: 'The URL to resolve, with or without the protocol prefix (e.g. "http://").',
      extendedDescription: 'If a `baseUrl` is specified, then this URL should be specified as a URL path (e.g. "/foo").  Otherwise, this _must_ include the hostname (e.g. `api.example.com`).',
      example: 'www.example.com/search',
      required: true
    },

    baseUrl: {
      friendlyName: 'Base URL',
      description: 'Optional base URL to resolve against, with or without the protocol prefix (e.g. "http://").',
      extendedDescription: 'If specified, this _must_ include the hostname (e.g. `api.example.com`).  It may also include a path (e.g. `http://api.example.com/pets`).',
      example: 'api.example.com/pets'
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Resolved URL',
      outputDescription: 'A sanitized, fully-qualified URL.',
      outputExample: 'http://www.example.com/search'
    }

  },


  fn: function(inputs, exits) {

    // Import the `url` module from Node core.
    var url = require('url');

    // Import the `path` module from Node core.
    var path = require('path');


    // Resolve either the `url` or the `baseUrl` (if one was provided.)
    //
    // > If a `baseUrl` WAS provided, once it is resolved (and valid),
    // > treat the primary `url` as a path, and resolve it relative to
    // > the base URL.
    var coercedUrl;

    //  ╦╔═╗  ┌┐ ┌─┐┌─┐┌─┐  ┬ ┬┬─┐┬    ┬ ┬┌─┐┌─┐  ┌─┐┬─┐┌─┐┬  ┬┬┌┬┐┌─┐┌┬┐
    //  ║╠╣   ├┴┐├─┤└─┐├┤   │ │├┬┘│    │││├─┤└─┐  ├─┘├┬┘│ │└┐┌┘│ ││├┤  ││
    //  ╩╚    └─┘┴ ┴└─┘└─┘  └─┘┴└─┴─┘  └┴┘┴ ┴└─┘  ┴  ┴└─└─┘ └┘ ┴─┴┘└─┘─┴┘ooo
    if (inputs.baseUrl !== undefined) {
      coercedUrl = inputs.baseUrl;

      // Before proceeding, take care of a few things that aren't handled the same way by `url.parse()`:
      // • if base URL begins with two slashes (//), then change it to `http://`.
      if (coercedUrl.match(/^(\/\/)/)){
        coercedUrl = coercedUrl.replace(/^\/\//, 'http://');
      }
      // • if base URL DOES NOT begin with a protocol-looking thing, then prefix it with `http://`
      else if (!coercedUrl.match(/^([a-z][a-z0-9]+:\/\/)/)) {
        coercedUrl =  'http://' + coercedUrl;
      }

      var baseUrlInfo = url.parse(coercedUrl);

      if (baseUrlInfo.search) {
        throw new Error('The provided base URL (`'+inputs.baseUrl+'`) contains a query string (`'+baseUrlInfo.search+'`).  But it should _never_ contain a query string.  That is only allowed in the primary URL (`url`).');
      }
      if (baseUrlInfo.hash) {
        throw new Error('The provided base URL (`'+inputs.baseUrl+'`) contains a hash/fragment (`'+baseUrlInfo.hash+'`).  But it should _never_ contain a URL fragment.  That is only allowed in the primary URL (`url`).');
      }

      // Ensure protocol
      // (set it to `http` if there isn't one)
      if (!baseUrlInfo.protocol) {
        baseUrlInfo.protocol = 'http:';
      }

      // Always make sure `slashes` is set to `true`.
      baseUrlInfo.slashes = true;

      // Verify hostname.
      if (!baseUrlInfo.hostname) {
        throw new Error('The provided base URL (`'+inputs.baseUrl+'`) was not a valid, fully-qualified URL.  Make sure it includes the hostname (e.g. "example.com").');
      }

      // Squish together any repeated adjacent slashes that appear in the path
      // (e.g. "http://foo///bar//z/////d.jpg" => "http://foo/bar/z/d.jpg")
      baseUrlInfo.pathname = baseUrlInfo.pathname.replace(/\/+/g, '/');

      // Trim trailing slashes in path.
      baseUrlInfo.pathname = baseUrlInfo.pathname.replace(/\/*$/, '');

      // Now we need to check that the provided target URL (`url`) is a valid URL path.
      var targetUrlInfo = url.parse(inputs.url);
      if (targetUrlInfo.protocol || targetUrlInfo.slashes) {
        throw new Error('The provided target URL (`'+inputs.url+'`) has an unexpected format.  Because a base URL (`'+inputs.baseUrl+'`) was also specified, the target URL should be provided as a URL path, like "/foo/bar".  It should not begin with a protocol like "http://".');
      }
      // --•  Assuming it looks good...

      // Join its path with the existing pathname.
      //
      // > Note that we're careful to grab _just the pathname_.
      // > That's because there might be a querystring or fragment,
      // > and we don't want to inadvertently double-encode it.
      baseUrlInfo.pathname = path.join(baseUrlInfo.pathname, targetUrlInfo.pathname);

      // And, one last time, trim trailing slashes in path.
      baseUrlInfo.pathname = baseUrlInfo.pathname.replace(/\/*$/, '');


      // Next, copy over the querystring and fragment, if they exist.
      baseUrlInfo.search = targetUrlInfo.search;
      baseUrlInfo.hash = targetUrlInfo.hash;


      // Finally, coallesce all the pieces.
      coercedUrl = url.format(baseUrlInfo);

    }// ‡
    //  ╔═╗╔╦╗╦ ╦╔═╗╦═╗╦ ╦╦╔═╗╔═╗
    //  ║ ║ ║ ╠═╣║╣ ╠╦╝║║║║╚═╗║╣
    //  ╚═╝ ╩ ╩ ╩╚═╝╩╚═╚╩╝╩╚═╝╚═╝ooo
    //  ┌─    ┌┐┌┌─┐  ┌┐ ┌─┐┌─┐┌─┐  ┬ ┬┬─┐┬    ┬ ┬┌─┐┌─┐  ┌─┐┬─┐┌─┐┬  ┬┬┌┬┐┌─┐┌┬┐    ─┐
    //  │───  ││││ │  ├┴┐├─┤└─┐├┤   │ │├┬┘│    │││├─┤└─┐  ├─┘├┬┘│ │└┐┌┘│ ││├┤  ││  ───│
    //  └─    ┘└┘└─┘  └─┘┴ ┴└─┘└─┘  └─┘┴└─┴─┘  └┴┘┴ ┴└─┘  ┴  ┴└─└─┘ └┘ ┴─┴┘└─┘─┴┘    ─┘
    else {

      coercedUrl = inputs.url;

      // Before proceeding, take care of a few things that aren't handled the same way by `url.parse()`:
      // • if URL begins with two slashes (//), then change it to `http://`.
      if (coercedUrl.match(/^(\/\/)/)){
        coercedUrl = coercedUrl.replace(/^\/\//, 'http://');
      }
      // • if URL DOES NOT begin with a protocol-looking thing, then prefix it with `http://`
      else if (!coercedUrl.match(/^([a-z][a-z0-9]+:\/\/)/)) {
        coercedUrl =  'http://' + coercedUrl;
      }

      var soloUrlInfo = url.parse(coercedUrl);

      // Ensure protocol
      // (set it to `http` if there isn't one)
      if (!soloUrlInfo.protocol) {
        soloUrlInfo.protocol = 'http:';
      }

      // Always make sure `slashes` is set to `true`.
      soloUrlInfo.slashes = true;

      // Verify hostname.
      if (!soloUrlInfo.hostname) {
        throw new Error('The provided URL (`'+inputs.url+'`) was not a valid, fully-qualified URL.  Make sure it includes the hostname (e.g. "example.com"), or to leave this primary URL as a path (like "/foo/bar"), you can also provide a separate base URL (e.g. "api.example.com/pets").');
      }

      // Squish together any repeated adjacent slashes that appear in the path
      // (e.g. "http://foo///bar//z/////d.jpg" => "http://foo/bar/z/d.jpg")
      soloUrlInfo.pathname = soloUrlInfo.pathname.replace(/\/+/g, '/');

      // Trim trailing slashes in path.
      soloUrlInfo.pathname = soloUrlInfo.pathname.replace(/\/*$/, '');

      // Now coallesce all the pieces.
      coercedUrl = url.format(soloUrlInfo);

    }//</else :: base URL was not provided>


    // --•
    // Now, if we made it here, return the fully-qualified URL through
    // the `success` exit.
    return exits.success(coercedUrl);
  }


};

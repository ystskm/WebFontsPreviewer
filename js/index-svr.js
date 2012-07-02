/***/
// required modules 
var utils = window.utils(), gridfs = window.fs;

// variables
var dn = __dirname, cn = dn.replace(/js$/, 'contents');

module.exports = function(res, location, navigator, callback) {

  var pn = location.pathname, page_data = null, body = null, returns = null, plg = jqyin.plugins;

  var forkme = jqyin.use('WebFontsGitHubFork');
  var slinks = jqyin.use('social-links');
  var googad = jqyin.use('googleadsense');
  var adwrap = jqyin.use('adwrapper');

  prepareLayout();

  function prepareLayout(err, datas) {

    try {

      gridfs.access(path.join(cn, 'index.html')).end(readend);

    } catch(e) {

      callback(e);

    }
  }
  function readend(err, byteRead, data) {
    try {

      body = $xj.layWrap($xj(data)), forkme.figure(getForkMark);

    } catch(e) {

      callback(e);

    }
  }
  function getForkMark(err, mark) {
    try {

      body.append(mark), slinks.figure(navigator, getSocialLinks);

    } catch(e) {

      callback(e);

    }
  }
  function getSocialLinks(err, mark) {
    try {

      if(err)
        throw err;

      jqyin.append(body.find('#like_area'), mark);

      googad.figure(getAdLinks);

    } catch(e) {

      callback(e);

    }
  }

  function getAdLinks(err, links) {
    try {

      if(err)
        throw err;

      jqyin.append(body.find('#ads'), adwrap.wrap(links)), callback(null, body);

    } catch(e) {

      callback(e);

    }
  }
};

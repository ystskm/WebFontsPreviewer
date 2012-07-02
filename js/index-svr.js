/***/
// required modules 
var utils = window.utils(), gridfs = window.fs;

// variables
var dn = __dirname, cn = dn.replace(/js$/, 'contents');

module.exports = function(res, location, navigator, callback) {

  var body = null;

  var forkme = jqyin.use('WebFontsGitHubFork');
  var slinks = jqyin.use('social-links');
  var googad = jqyin.use('googleadsense');
  var adwrap = jqyin.use('adwrapper');
  var wgtwit = jqyin.use('widget-twitter');

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

      body = $xj.layWrap($xj(data)), forkme.figure(gotForkMark);

    } catch(e) {

      callback(e);

    }
  }
  function gotForkMark(err, mark) {
    try {

      body.append(mark), slinks.figure(navigator, {
        plugintype: {
          twitter: {
            plugintype: {
              share: {
                text: 'お気に入りのウェブフォントを試しながら見つけられます。'
                  + 'WebFontsPreview - http://bit.ly/NndGuU',
                hashtags: 'WebFontsPreview'
              }
            }
          }
        }
      }, gotSocialLinks);

    } catch(e) {

      callback(e);

    }
  }
  function gotSocialLinks(err, mark) {
    try {

      if(err)
        throw err;

      jqyin.append(body.find('#like_area'), mark);

      googad.figure(gotAdLinks);

    } catch(e) {

      callback(e);

    }
  }

  function gotAdLinks(err, links) {
    try {

      if(err)
        throw err;

      jqyin.append(body.find('#ads'), adwrap.wrap(links));

      body.find('#mesbox').css({
        opacity: 0.92,
        border: '1px solid #f88',
        borderRadius: 8
      });

      jqyin.append(body.find('#tw-widget'), wgtwit.figure({
        type: 'search',
        search: '#WebFont',
        title: 'Web Font hashed teeets #WebFont',
        width: 250,
        height: 200,
        features: {
          scrollbar: true
        }
      }));

      callback(null, body);

    } catch(e) {

      callback(e);

    }
  }
};

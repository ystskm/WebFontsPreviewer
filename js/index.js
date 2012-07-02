/***/
$xj('PLUGINcookie', prepare);

function prepare() {

  console.log('I am index.js - simplest version -');

  var CSSList = {}, CSSNow = null, GWF = null;

  $('#close-ads').toggle(function() {
    $('#ads').animate({
      height: 16
    });
  }, function(){
    $('#ads').animate({
      height: 260
    })
  })

  $('#apply').click(apply);

  $('#clear').click(clear);

  $('#open').click(showGWF);

  $('#cssstr,#teststr,#testcss').keyup(redraw);

  $('input').focus(focus).blur(blur);

  clear();

  function apply() {
    var url = $('#urlstr').val(), val = $('#cssstr').val();
    if(val && (CSSList[val] == null || CSSList[val] != url)) {
      if(url) {
        var link = jqyin.createLink('stylesheet', url + val);
        jqyin.writeToHead(link);
      } else {
        var link = $('<style/>'), name = val.replace(/^(.+\/)?([^\/]+)$/,
          function() {
            return RegExp.$2;
          });
        var style = [];
        style.push("@font-face {");
        style.push("font-family: '" + name + "';");
        style.push("font-style: normal;");
        style.push("font-weight: 400;");
        style.push("src: local('" + name + "'), local('" + name
          + "-Regular'), url('" + val + ".woff') format('woff');");
        style.push("}");
        jqyin.writeToHead(link.text(style.join("\n")).get(0));
      }
    }
    CSSList[val] = {
      url: url
    }, CSSNow = val, redraw();
  }

  function clear() {

    var DefaultValue = {
      Url: 'http://fonts.googleapis.com/css?family=',
      Nam: 'Share',
      Str: 'Free, Realtime test space for web font.<br/>'
        + '&copy;cloudplus.me presented by ' + 'liberty-technology.biz',
      Css: JSON.stringify({
        "font-size": "300%",
        "text-shadow": "0px 0px 12px #3c3",
        "color": "#fff"
      })
    };

    if(!$('#urlstr').val() || $('#c_url').attr('checked'))
      $('#urlstr').val(DefaultValue.Url);

    if(!$('#cssstr').val() || $('#c_name').attr('checked'))
      $('#cssstr').val(DefaultValue.Nam);

    if(!$('#teststr').val() || $('#c_str').attr('checked'))
      $('#teststr').val(DefaultValue.Str);

    if(!$('#testcss').val() || $('#c_css').attr('checked'))
      $('#testcss').val(DefaultValue.Css);

    $('#apply').click();
  }

  function redraw() {
    if(CSSNow)
      $('#preview').css('font-family', CSSNow);
    var extcss = null;
    try {
      extcss = JSON.parse($('#testcss').val());
    } catch(e) {

    }
    if(extcss)
      $('#preview').css(extcss);
    $('#preview').html($('#teststr').val());
  }

  function showGWF() {
    try {
      if(GWF.closed)
        throw Error();
      GWF.focus();
    } catch(e) {
      GWF = window.open('http://www.google.com/webfonts', 'GWF', 'width='
        + ($(window).width() - 60) + ', height=300, screenX='
        + (window.screenX + 30) + ', screenY=' + ($(window).height() - 300)
        + ', menubar=no, toolbar=no');
    }
  }

  function focus() {
    $('.focus').removeClass('focus');
    if($(this).attr('data-target'))
      $('.' + $(this).attr('data-target')).addClass('focus');
  }

  function blur() {
    $('.focus').removeClass('focus');
  }

};

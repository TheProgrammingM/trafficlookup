window.onload=function(){

(function() {
'use strict';

var module = {
  options: [],
  header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
  dataos: [{
      name: 'Windows Phone',
      value: 'Windows Phone',
      version: 'OS'
    },
    {
      name: 'Windows',
      value: 'Win',
      version: 'NT'
    },
    {
      name: 'iPhone',
      value: 'iPhone',
      version: 'OS'
    },
    {
      name: 'iPad',
      value: 'iPad',
      version: 'OS'
    },
    {
      name: 'Kindle',
      value: 'Silk',
      version: 'Silk'
    },
    {
      name: 'Android',
      value: 'Android',
      version: 'Android'
    },
    {
      name: 'PlayBook',
      value: 'PlayBook',
      version: 'OS'
    },
    {
      name: 'BlackBerry',
      value: 'BlackBerry',
      version: '/'
    },
    {
      name: 'Macintosh',
      value: 'Mac',
      version: 'OS X'
    },
    {
      name: 'Linux',
      value: 'Linux',
      version: 'rv'
    },
    {
      name: 'Palm',
      value: 'Palm',
      version: 'PalmOS'
    }
  ],
  databrowser: [{
      name: 'Chrome',
      value: 'Chrome',
      version: 'Chrome'
    },
    {
      name: 'Firefox',
      value: 'Firefox',
      version: 'Firefox'
    },
    {
      name: 'Safari',
      value: 'Safari',
      version: 'Version'
    },
    {
      name: 'Internet Explorer',
      value: 'MSIE',
      version: 'MSIE'
    },
    {
      name: 'Opera',
      value: 'Opera',
      version: 'Opera'
    },
    {
      name: 'BlackBerry',
      value: 'CLDC',
      version: 'CLDC'
    },
    {
      name: 'Mozilla',
      value: 'Mozilla',
      version: 'Mozilla'
    }
  ],
  init: function() {
    var agent = this.header.join(' '),
      os = this.matchItem(agent, this.dataos),
      browser = this.matchItem(agent, this.databrowser);

    return {
      os: os,
      browser: browser
    };
  },
  matchItem: function(string, data) {
    var i = 0,
      j = 0,
      html = '',
      regex,
      regexv,
      match,
      matches,
      version;

    for (i = 0; i < data.length; i += 1) {
      regex = new RegExp(data[i].value, 'i');
      match = regex.test(string);
      if (match) {
        regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
        matches = string.match(regexv);
        version = '';
        if (matches) {
          if (matches[1]) {
            matches = matches[1];
          }
        }
        if (matches) {
          matches = matches.split(/[._]+/);
          for (j = 0; j < matches.length; j += 1) {
            if (j === 0) {
              version += matches[j] + '.';
            } else {
              version += matches[j];
            }
          }
        } else {
          version = '0';
        }
        return {
          name: data[i].name,
          version: parseFloat(version)
        };
      }
    }
    return {
      name: 'unknown',
      version: 0
    };
  }
};

navigator.geolocation.getCurrentPosition(function(position) {
  //do_something(position.coords.latitude, position.coords.longitude);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let infolong = 'Location longitude = ' + position.coords.longitude + '<br/>'
  let infolet = 'Location latitude = ' + position.coords.latitude + '<br/>'
  let addresslookup = "https://www.openstreetmap.org/directions?from=&to=" + position.coords.latitude + "%2C" + position.coords.longitude
  document.getElementById('linkmap').setAttribute("href", addresslookup);
  console.log("https://www.openstreetmap.org/#map=11/" + position.coords.latitude + "/" + position.coords.longitude)
  document.getElementById('lockk').innerHTML += infolong;
  document.getElementById('lockk').innerHTML += infolet;
});
//console.log(position);

var e = module.init(),

debug = '';

debug += '<tr> <td class="left"> Betriebsystem </td> <td class="right">' + e.os.name + '</td><tr/>';
debug += '<tr> <td class="left"> Version </td> <td class="right">' + e.os.version + '</td><tr/>';
debug += '<tr> <td class="left"> Browser </td> <td class="right">' + e.browser.name + '</td><tr/>';
debug += '<tr><td class="left"> Browserversion </td> <td class="right">' + e.browser.version + '</td><tr/>';
debug += '<tr><td class="left"> UserAgent </td> <td class="right">' + navigator.userAgent + '</td><tr/>';
debug += '<tr><td class="left"> AppVersion </td> <td class="right">' + navigator.appVersion + '</td><tr/>';
debug += '<tr><td class="left"> Platform  </td><td class="right">' + navigator.platform + '</td><tr/>';

browser.browsingData.settings()
.then(function(result){
    console.log(result);
    console.log("SNIFbuoFUO");
})
.catch(function(error){
    // Handle error
});

// debug += 'navigator.vendor = ' + navigator.vendor + '<br/>';

document.getElementById('log').innerHTML = debug;
}());


  }

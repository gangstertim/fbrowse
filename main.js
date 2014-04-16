global.$ = $;

var abar 		    = require('address_bar');
var folder_view = require('folder_view');
var path        = require('path');				  // built in node.js module
var shell       = require('nw.gui').Shell;	// node-webkit
var numBars     = 1;

$(document).ready(function() {
	var folder     = new folder_view.Folder($('#beta'));
	var addressbar = new abar.AddressBar($('#addressbar'));
  var currDir    = process.cwd();
  var numFolds   = 0;
  
  folder.open(currDir);			         // opens current working directory
  addressbar.set(currDir);


  folder.on('navigate', function(dir, mime) {
    if (mime.type == 'folder') {
      addressbar.enter(mime);
    } else {
      shell.openItem(mime.path);
    }
  });

  addressbar.on('navigate', function(dir) {
    folder.open(dir);
  });

});
Package.describe({
  name: "sergeyt:jquery-xml2json",
  summary: "jQuery plugin to convert XML to JSON.",
  git: "https://github.com/sergeyt/jquery-xml2json",
  version: "0.0.7"
});

Package.onUse(function(api) {
  var client = ['client'];
  api.use('jquery', client);
  api.addFiles('./src/xml2json.js', client);
});


Package.describe({
  name: 'yasaricli:slugify',
  summary: 'Remove all special characters from a string meteor packaging.',
  version: '0.0.3',
  git: 'https://github.com/yasaricli/meteor-slugify.git'
});

Package.onUse(function(api, where) {
  var where = where || ['client', 'server'];

  // meteor @version
  api.versionsFrom('1.0.2.1');

  // add file slugify and export
  api.addFiles('slugify.js', where);
  api.export('slugify');
});

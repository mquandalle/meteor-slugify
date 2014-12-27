// global on the window (or global) object, while Meteor expects a file-scoped global variable
slugify = this.slugify;
delete this.slugify;

/* Add include helper to handlebars */
Handlebars.registerHelper('include', function(template, options) {
    var context = options || this;
    template = Handlebars.compile(config.templates[template]);    
    return template(context);
});

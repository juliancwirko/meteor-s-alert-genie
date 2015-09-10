Package.describe({
    'summary': 'Genie effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '3.1.0',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-genie.git',
    'name': 'juliancwirko:s-alert-genie'
});

Package.onUse(function (api) {
    api.use('juliancwirko:s-alert@3.1.0', ['client']);
    api.imply('juliancwirko:s-alert@3.1.0', ['client']);
    api.addFiles([
        's-alert-genie.css'
    ], 'client');
});

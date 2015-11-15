requirejs.config({
    baseUrl: "modules/js",
    paths: {
        "jquery": "../../bower_components/jquery/dist/jquery",
        "text": "../../bower_components/requirejs-text/text",
    },
    // Shim configurations for modules that do not expose AMD
    shim: {
        "jquery": {
            exports: ["jQuery", "$"]
        }
    }

});
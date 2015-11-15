/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.config("requirejs", {
        main: {
            options: {
            name: "app",
                mainConfigFile: "public_html/modules/js/config.js",
                baseUrl: "public_html/modules/js",
                include: [ "mod"],
                preserveLicenseComments: true,
                removeCombined: false,
                skipDirOptimize: true,
                optimizeCss: false,
                out: "public_html/build/build.min.js",
                optimize: "none",
            }
        }
    });
};

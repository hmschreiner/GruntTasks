/**
 * Simple Grunt task to files minification
 */
module.exports = function (grunt) {

    // Folder to minified files
    var minifyFolder = 'dist';

    grunt.initConfig({
        // Minify CSS task
        cssmin: {
            target: {
                files: [{
                        expand: true,
                        cwd: 'public/css',
                        src: ['**/*.css'],
                        dest: 'public/' + minifyFolder + '/css',
                        ext: '.css'
                    }]
            }
        },
        // Minify JS task
        uglify: {
            target_files: {
                files: [{
                        expand: true,
                        cwd: 'public/js',
                        src: '**/*.js',
                        dest: 'public/' + minifyFolder + '/js'
                    }]
            },
            options: {
                banner: "",
                footer: ""
            }
        }
    });

    // Loads needed modules
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-newer');
    
    grunt.registerTask('default', ['newer:cssmin', 'newer:uglify']);
};

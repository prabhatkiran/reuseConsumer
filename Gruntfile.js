module.exports = function (grunt) {
	"use strict";
	var webAppDir = "src";
    var optDir = "opt";
	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
	grunt.registerTask("default", [
		"clean",
		"lint",
		"build"
	]);
	// grunt.initConfig({
 //       copy: {
 //           copyLib: {
 //               files: [
 //                   {
 //                       expand: true, cwd: "node_modules/sapui5con-reusablelibrary1/opt/", src: ["**"], dest: webAppDir + "/resources/"
 //                   },
 //                   {
 //                       expand: true, cwd: "node_modules/sapui5con-reusablelibrary1/opt/", src: ["**"], dest: optDir + "/resources/"
 //                   }
 //               ]
 //           }
 //       }
 //   });
};
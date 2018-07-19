/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"Sample/reuseConsumer/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Sample/reuseConsumer/test/integration/pages/Worklist",
	"Sample/reuseConsumer/test/integration/pages/Object",
	"Sample/reuseConsumer/test/integration/pages/NotFound",
	"Sample/reuseConsumer/test/integration/pages/Browser",
	"Sample/reuseConsumer/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Sample.reuseConsumer.view."
	});

	sap.ui.require([
		"Sample/reuseConsumer/test/integration/WorklistJourney",
		"Sample/reuseConsumer/test/integration/ObjectJourney",
		"Sample/reuseConsumer/test/integration/NavigationJourney",
		"Sample/reuseConsumer/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
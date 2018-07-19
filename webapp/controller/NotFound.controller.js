sap.ui.define([
		"Sample/reuseConsumer/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("Sample.reuseConsumer.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);
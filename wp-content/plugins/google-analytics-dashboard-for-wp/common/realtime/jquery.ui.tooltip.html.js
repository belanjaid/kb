jQuery(function () {
      jQuery('#gadwp-widget *').tooltip({
		  items: "[data-gadwp]",
          content: function () {
              return jQuery(this).attr("data-gadwp");
          }
      });
  });

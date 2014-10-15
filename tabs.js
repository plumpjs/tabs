// *
// *  PlumpJS: Tabs
// *
var Tabs = new Class({

	Implements: Options,

	// Create default options.
	options: {
		initialTab: 0,
		activeTabClass: 'active',
		hiddenClass: 'hide'
	},

	// Initialize the constructor.
	initialize: function(el, options) {
		this.el = $(el);
		this.setOptions(options);

		// Store tabs.
		this.tabs = this.el.getElements('li a');

		// Store content.
		this.tabContents = this.el.getChildren('div');

		// On each tab function.
		this.tabs.each(function(tab, i) {
			// Bind click event handler to run @switchTab function.
			tab.addEvent('click', this.switchTab.bind(this, i));
		}, this);

		this.switchTab(this.options.initialTab);
	},

	switchTab: function(idx) {
		// Hide the content first and remove class from the active tab.
		this.tabContents.addClass(this.options.hiddenClass);
		this.tabs.removeClass(this.options.activeTabClass);
		// Show the new content and add class to the active tab.
		this.tabs[idx].addClass(this.options.activeTabClass);
		this.tabContents[idx].removeClass(this.options.hiddenClass);
	}
});

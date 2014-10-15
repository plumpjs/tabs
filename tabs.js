// *
// *  PlumpJS: Tabs
// *
var Tabs = new Class({

	Implements: Options,

	// Create default options.
	options: {
		activeTab: 0,
		hideAll: false
	},

	// Initialize the constructor.
	initialize: function(el, options) {
		this.el = $(el);
		this.setOptions(options);

		// Store our items, including both tabs and content.
		this.item = el.getElements('li').getChildren();

		// Store tabs.
		this.tab = this.item[0];

		// Store content.
		this.content = this.item[1];

		// Hide all content by default.
		this.hide(this.content);

		// If we decide not to hide all by default,
		// enable the active content defined in our options.
		if (!this.options.hideAll) {
			this.show(this.content[this.options.activeTab]);
		}

		// On each tab function...
		this.tab.each(function(tab, i) {
			// Bind click event handler to run @switchTab function.
			tab.addEvent('click', this.switchTab.bind(this, i));
		}, this);
	},

	// Function to toggle visibility of the content.
	switchTab: function(idx) {
		// Hide it first.
		this.hide(this.content);
		// And show our current tab based on the indexing anchor.
		this.show(this.content[idx]);
	},

	// Hide functionality.
	hide: function(element) {
		return element.setStyle('display', 'none');
	},

	// Show functionality.
	show: function(element) {
		return element.setStyle('display', 'block');
	}
});

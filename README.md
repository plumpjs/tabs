# Tabs

MooTools tabbed content implementation.


## Usage

Using extremely basic HTML:

````
<div class="js-tabs">
	<ul>
		<li>
			<a href="#tab-1">Tab 1</a>
		</li>
		<li>
			<a href="#tab-2">Tab 2</a>
		</li>
		<li>
			<a href="#tab-3">Tab 3</a>
		</li>
	</ul>
	<div id="tab-1">
		<p>Tab 1</p>
	</div>
	<div id="tab-2">
		<p>Tab 2</p>
	</div>
	<div id="tab-3">
		<p>Tab 3</p>
	</div>
</div>
````

Now implement the loop for each `Tabs` call:

````
$$('.js-tabs').each(function(el) {

	new Tabs(el, { 
		activeTabClass: 'active', 
		hiddenClass: 'hide' 
	});

});
````

This will now look for any markup in the HTML with a `.js-tabs` selector and initialize `Tabs`.


## Default options

By default, we are setting the active and hidden class selectors. Essentially, adding `.hide` to our tabbed content will inherit styling, such as `.hide { display: none; }`. Instead of using javascript to add inline HTML, we're using class sectors to define the styling. 

| Option  			| Type   	| Default Value		| Description		|
|---	    		|---	    |---	 			|---    			|
| activeTabClass  	| String   	| 'active'			| Adds a class selector to the current active tab. |
| hiddenClass  		| String  	| 'hide'			| Adds a class selector to all current hidden content. 		|
| initialTab  		| Number  	| 0					| Default initial tab to show on load. |
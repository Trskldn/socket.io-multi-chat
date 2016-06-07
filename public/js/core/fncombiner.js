define(['jquery', 'underscore'], function() {


	// test0 = function(cntx){ console.log('test0'); cntx.data = 1;};
	// test1 = function(){ console.log('test1');};
	// test2 = function(){ console.log('test2');};
	// test3 = function(){ console.log('test3');};
	// test4 = function(cntx){ console.log('test4  '+cntx.data);};

	// var c1 = fncombiner(test0, test1, [test2, test3], test4);
	// c1();
	return function( /*(fn|Array)*/ ) {
		var args = [].slice.call(arguments);
		var cntx = {};
		var dfr = $.Deferred();
		var fnmap;

		if (args.length == 1) {
			fnmap = _.isArray(args[0]) ? args[0] : [args[0]];
		} else {
			fnmap = args;
		}

		function next(fnArr, args) {
			var fn = fnArr.shift();
			var dfrmap = _.map(_.isArray(fn) ? fn : [fn], function(fn) {
				return fn.apply(fn, args);
			});

			$.when.apply($, dfrmap)
				.done(function(cntx) {
					if (fnArr.length > 0) {
						next(fnArr, args);
					} else {
						dfr.resolve(cntx);
					}
				})
				.fail(function(err) {
					dfr.reject(err);
				});
		}

		return function() {
			var args = [].slice.call(arguments).concat([cntx]);

			next(fnmap.slice(), args);
			return dfr.promise();
		};
	};
});
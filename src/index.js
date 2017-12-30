/** 
 * @author Gilles Coomans <gilles.coomans@gmail.com>
 * Simple function call parser
 */

let elenpi = require('elenpi');

elenpi = elenpi.default || elenpi;

const r = elenpi.Rule.initializer;

const rules = {

	doublestring: r.terminal(/^"((?:[^"\\]|\\.)*)"/, (env, descriptor, cap) => descriptor.arguments.push(cap[1])),

	singlestring: r.terminal(/^'((?:[^'\\]|\\.)*)'/, (env, descriptor, cap) => descriptor.arguments.push(cap[1])),

	templatestring: r.terminal(/^`([^`]*)`/, (env, descriptor, cap) => descriptor.arguments.push(cap[1])),

	float: r.terminal(/^[0-9]*\.[0-9]+/, (env, descriptor, cap) => descriptor.arguments.push(parseFloat(cap[0], 10))),

	integer: r.terminal(/^[0-9]+/, (env, descriptor, cap) => descriptor.arguments.push(parseInt(cap[0], 10))),

	bool: r.terminal(/^(true|false)/, (env, descriptor, cap) => descriptor.arguments.push((cap[1] === 'true') ? true : false)),

	null: r.terminal(/^null/, (env, obj) => obj.arguments.push(null)),

	undefined: r.terminal(/^undefined/, (env, obj) => obj.arguments.push(undefined)),

	NaN: r.terminal(/^NaN/, (env, obj) => obj.arguments.push(NaN)),

	Infinity: r.terminal(/^Infinity/, (env, obj) => obj.arguments.push(Infinity)),
	//_____________________________________

	call: r
		.terminal(/^\s*([\w-_]+)\s*/, (env, obj, cap) => {
			obj.method = cap[1]; 
			obj.arguments = [];
		}) // method name
		.maybeOne(
			r.terminal(/^\(\s*/) // open parenthesis
			.zeroOrMore({ // arguments list
				rule: r.oneOf('singlestring', 'doublestring', 'templatestring', 'null', 'undefined', 'NaN', 'Infinity', 'float', 'integer', 'bool'),
				separator: r.terminal(/^\s*,\s*/)
			})
			.terminal(/^\s*\)\s*/) // close parenthesis
		)
};

module.exports = new elenpi.Parser(rules, 'call');

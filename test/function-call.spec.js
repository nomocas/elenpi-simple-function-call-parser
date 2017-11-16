/**
 * @author Gilles Coomans <gilles.coomans@gmail.com>
 *
 */

/* global describe, it */
import chai from 'chai';
import parser from '../src/index';

const expect = chai.expect;
chai.should();

describe("function call parsing", () => {

	describe("parsing a call with parenthesis and no arguments", () => {
		const res = parser.parse('foo()');
		it("should return", () => {
			expect(res).to.deep
				.equals({
					method: 'foo',
					arguments: []
				});
		});
	});

	describe("parsing a call without parenthesis", () => {
		const res = parser.parse('foo');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: []
			});
		});
	});

	describe("parsing a call with name that contains an hyphen", () => {
		const res = parser.parse('foo-bar()');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo-bar',
				arguments: []
			});
		});
	});

	describe("parsing a call with a single integer argument", () => {
		const res = parser.parse('foo(1)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: [1]
			});
		});
	});

	describe("parsing a call with a single float argument", () => {
		const res = parser.parse('foo(1.03)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: [1.03]
			});
		});
	});

	describe("parsing a call with a single bool (true) argument", () => {
		const res = parser.parse('foo(true)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: [true]
			});
		});
	});

	describe("parsing a call with a single bool (false) argument", () => {
		const res = parser.parse('foo(false)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: [false]
			});
		});
	});

	describe("parsing a call with a single double-quoted-string argument", () => {
		const res = parser.parse('foo("hop")');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: ['hop']
			});
		});
	});

	describe("parsing a call with a single template-quoted-string argument", () => {
		const res = parser.parse('foo(`hop`)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: ['hop']
			});
		});
	});

	describe("parsing a call with a single string argument that contains a coma", () => {
		const res = parser.parse('foo("hop, bar")');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: ['hop, bar']
			});
		});
	});

	describe("parsing a call with a single single-quoted-string argument", () => {
		const res = parser.parse('foo(\'hop\')');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: ['hop']
			});
		});
	});

	describe("parsing a call with a single NaN argument", () => {
		const res = parser.parse('foo(NaN)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: [NaN]
			});
		});
	});

	describe("parsing a call with a single Infinity argument", () => {
		const res = parser.parse('foo(Infinity)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: [Infinity]
			});
		});
	});

	describe("parsing a call with a single null argument", () => {
		const res = parser.parse('foo(null)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: [null]
			});
		});
	});

	describe("parsing a call with a single NaN argument", () => {
		const res = parser.parse('foo(NaN)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: [NaN]
			});
		});
	});

	describe("parsing a call with a single undefined argument", () => {
		const res = parser.parse('foo(undefined)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo',
				arguments: [undefined]
			});
		});
	});

	describe("parsing a call with all argument types", () => {
		const res = parser.parse('foo-bar(12, 14.23, true, "zoo, bar", \'hop\', null, NaN, Infinity, undefined)');
		it("should return", () => {
			expect(res).to.deep.equals({
				method: 'foo-bar',
				arguments: [12, 14.23, true, 'zoo, bar', 'hop', null, NaN, Infinity, undefined]
			});
		});
	});

});

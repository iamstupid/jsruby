/**
 * RUBY.js
 * enabling ruby-style programming in JavaScript
 * */
(function() {
	window.rb=rb||{};
	function valur(n){
		var a=function(){
			return n;
		};
		a.elsif=a.else=function(){};
		a.valueOf=function(){
			return n.valueOf();
		};
		return a;
	}
	function choiser(){
		this.elsif=function(bool){
			return rb.if(bool);
		};
		this.else=function(fn){
			return fn();
		}
	}
	function ifer(fn){
		return valur(fn());
	}
	function elser(fn){
		return new choiser();
	}
	rb.if=function(bool){
		if(bool){
			return ifer;
		}else{
			return elser;
		}
	}
})();

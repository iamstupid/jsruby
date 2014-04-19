/**
 * RUBY.js
 * enabling ruby-style programming in JavaScript
 * */
(function() {
	window.rb={};
	function c(e){
		if(typeof e==="function"){
			return e();
		}else{
			return eval(e);
		}
	}
	function valur(n){
		var a=function(){
			return n;
		};
		a.elsif=a.else=function(){
			return this;
		};
		a.valueOf=function(){
			return n.valueOf();
		};
		a.end=n;
		return a;
	}
	function choiser(){
		this.elsif=function(bool){
			return rb.if(bool);
		};
		this.else=function(fn){
			return new valur(c(fn));
		};
	}
	function ifer(fn){
		return valur(c(fn));
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
	};
})();

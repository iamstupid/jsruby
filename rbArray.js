(function() {
	window.rb=rb||{};
	window.nil=rb.nil=undefined;
	function makeArray(a){
		var arr=function(q,s){
			return queryArr(a,q,s);
		}
		arr.__defineGetter__("length",function(){
			return a.length;
		});
		arr.__defineGetter__("size",function(){
			return a.length;
		});
		arr.__defineGetter__("empty",function(){
			return a.length===0;
		});
		arr.count=function(b){
			var c=0;
			for(var i in a){
				if(a[i]===b){
					c++;
				}
			}
			return c;
		}
	}
	rb.Array=function(a){
		return makeArray(a);
	}
	rb.Array.new=function(count,data){
		if(count.class===rb.Array){
			return count("0..-1");
		}
		if(typeof count!=="undefined"){
			var arr=[];
			if(typeof data==="function"){
				for(var i=0;i<count;i++){
					arr.push(data.call({},i));
				}
				return makeArray(arr);
			}
			for(var i=0;i<count;i++){
				arr.push(data);
				return makeArray(arr);
			}
		}
	}
})

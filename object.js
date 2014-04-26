Function.prototype.new=function(){
  var arg=Array.prototype.slice.call(arguments);
  return eval("new this(arg)");
}
Object.prototype.__defineGetter__("class",function(){
  return this.constructor;
})

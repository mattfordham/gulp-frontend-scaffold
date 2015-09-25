(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Greetings;

Greetings = require("./modules/sayHello");

$(function() {
  console.log(Greetings.sayHello());
  return console.log(Greetings.sayGoodbye());
});


},{"./modules/sayHello":2}],2:[function(require,module,exports){
var Greetings;

Greetings = {
  sayHello: function() {
    return "Hello";
  },
  sayGoodbye: function() {
    return "Bye";
  }
};

module.exports = Greetings;


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0L1dvcmsvTWlzYy9PcGVuU291cmNlL2d1bHAtZnJvbnRlbmQtc2NhZmZvbGQvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21hdHQvV29yay9NaXNjL09wZW5Tb3VyY2UvZ3VscC1mcm9udGVuZC1zY2FmZm9sZC9zb3VyY2UvanMvbWFpbi5jb2ZmZWUiLCIvVXNlcnMvbWF0dC9Xb3JrL01pc2MvT3BlblNvdXJjZS9ndWxwLWZyb250ZW5kLXNjYWZmb2xkL3NvdXJjZS9qcy9tb2R1bGVzL3NheUhlbGxvLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsU0FBQTs7QUFBQSxTQUFBLEdBQVksT0FBQSxDQUFRLG9CQUFSLENBQVosQ0FBQTs7QUFBQSxDQUVBLENBQUUsU0FBQSxHQUFBO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVMsQ0FBQyxRQUFWLENBQUEsQ0FBWixDQUFBLENBQUE7U0FDQSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVMsQ0FBQyxVQUFWLENBQUEsQ0FBWixFQUZBO0FBQUEsQ0FBRixDQUZBLENBQUE7Ozs7QUNBQSxJQUFBLFNBQUE7O0FBQUEsU0FBQSxHQUNFO0FBQUEsRUFBQSxRQUFBLEVBQVUsU0FBQSxHQUFBO1dBQ1IsUUFEUTtFQUFBLENBQVY7QUFBQSxFQUdBLFVBQUEsRUFBWSxTQUFBLEdBQUE7V0FDVixNQURVO0VBQUEsQ0FIWjtDQURGLENBQUE7O0FBQUEsTUFPTSxDQUFDLE9BQVAsR0FBaUIsU0FQakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJHcmVldGluZ3MgPSByZXF1aXJlIFwiLi9tb2R1bGVzL3NheUhlbGxvXCJcblxuJCAtPiBcbiAgY29uc29sZS5sb2cgR3JlZXRpbmdzLnNheUhlbGxvKClcbiAgY29uc29sZS5sb2cgR3JlZXRpbmdzLnNheUdvb2RieWUoKSIsIkdyZWV0aW5ncyA9XG4gIHNheUhlbGxvOiAtPlxuICAgIFwiSGVsbG9cIlxuXG4gIHNheUdvb2RieWU6IC0+XG4gICAgXCJCeWVcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyZWV0aW5ncyJdfQ==

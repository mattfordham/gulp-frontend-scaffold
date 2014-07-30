(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var TestView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TestView = (function(_super) {
  __extends(TestView, _super);

  function TestView() {
    return TestView.__super__.constructor.apply(this, arguments);
  }

  TestView.prototype.className = 'test-view';

  TestView.prototype.initialize = function() {
    return this.render();
  };

  TestView.prototype.render = function() {
    var $html;
    $html = this.$el.html("Hello TestView!");
    return $html.appendTo('body');
  };

  return TestView;

})(Backbone.View);

module.exports = TestView;


},{}],2:[function(require,module,exports){
require('./spec/main.coffee');


},{"./spec/main.coffee":3}],3:[function(require,module,exports){
var TestView;

TestView = require('../../source/js/views/TestView.coffee');

describe('View', function() {
  this.view = new TestView;
  after((function(_this) {
    return function() {
      return _this.view.remove();
    };
  })(this));
  it('Should exist', (function(_this) {
    return function() {
      return expect(_this.view).to.exist;
    };
  })(this));
  return it('Should append a .view class to the dom', function() {
    return expect($('body').find('.test-view').length).to.equal(1);
  });
});


},{"../../source/js/views/TestView.coffee":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWF0dC9Xb3JrL01pc2MvT3BlblNvdXJjZS9ndWxwIHBpcGVsaW5lL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9tYXR0L1dvcmsvTWlzYy9PcGVuU291cmNlL2d1bHAgcGlwZWxpbmUvc291cmNlL2pzL3ZpZXdzL1Rlc3RWaWV3LmNvZmZlZSIsIi9Vc2Vycy9tYXR0L1dvcmsvTWlzYy9PcGVuU291cmNlL2d1bHAgcGlwZWxpbmUvdGVzdC9zcGVjLXJ1bm5lci5jb2ZmZWUiLCIvVXNlcnMvbWF0dC9Xb3JrL01pc2MvT3BlblNvdXJjZS9ndWxwIHBpcGVsaW5lL3Rlc3Qvc3BlYy9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsUUFBQTtFQUFBO2lTQUFBOztBQUFBO0FBRUcsNkJBQUEsQ0FBQTs7OztHQUFBOztBQUFBLHFCQUFBLFNBQUEsR0FBVyxXQUFYLENBQUE7O0FBQUEscUJBRUEsVUFBQSxHQUFZLFNBQUEsR0FBQTtXQUNULElBQUMsQ0FBQSxNQUFELENBQUEsRUFEUztFQUFBLENBRlosQ0FBQTs7QUFBQSxxQkFLQSxNQUFBLEdBQVEsU0FBQSxHQUFBO0FBQ0wsUUFBQSxLQUFBO0FBQUEsSUFBQSxLQUFBLEdBQVEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxJQUFMLENBQVUsaUJBQVYsQ0FBUixDQUFBO1dBQ0EsS0FBSyxDQUFDLFFBQU4sQ0FBZSxNQUFmLEVBRks7RUFBQSxDQUxSLENBQUE7O2tCQUFBOztHQUZvQixRQUFRLENBQUMsS0FBaEMsQ0FBQTs7QUFBQSxNQVdNLENBQUMsT0FBUCxHQUFpQixRQVhqQixDQUFBOzs7O0FDQUEsT0FBQSxDQUFRLG9CQUFSLENBQUEsQ0FBQTs7OztBQ0FBLElBQUEsUUFBQTs7QUFBQSxRQUFBLEdBQVcsT0FBQSxDQUFRLHVDQUFSLENBQVgsQ0FBQTs7QUFBQSxRQUVBLENBQVMsTUFBVCxFQUFpQixTQUFBLEdBQUE7QUFFZCxFQUFBLElBQUMsQ0FBQSxJQUFELEdBQVEsR0FBQSxDQUFBLFFBQVIsQ0FBQTtBQUFBLEVBRUEsS0FBQSxDQUFNLENBQUEsU0FBQSxLQUFBLEdBQUE7V0FBQSxTQUFBLEdBQUE7YUFDSCxLQUFDLENBQUEsSUFBSSxDQUFDLE1BQU4sQ0FBQSxFQURHO0lBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBTixDQUZBLENBQUE7QUFBQSxFQUtBLEVBQUEsQ0FBRyxjQUFILEVBQW1CLENBQUEsU0FBQSxLQUFBLEdBQUE7V0FBQSxTQUFBLEdBQUE7YUFDaEIsTUFBQSxDQUFRLEtBQUMsQ0FBQSxJQUFULENBQWUsQ0FBQyxFQUFFLENBQUMsTUFESDtJQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5CLENBTEEsQ0FBQTtTQVFBLEVBQUEsQ0FBRyx3Q0FBSCxFQUE2QyxTQUFBLEdBQUE7V0FDMUMsTUFBQSxDQUFRLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxJQUFWLENBQWUsWUFBZixDQUE0QixDQUFDLE1BQXJDLENBQTZDLENBQUMsRUFBRSxDQUFDLEtBQWpELENBQXVELENBQXZELEVBRDBDO0VBQUEsQ0FBN0MsRUFWYztBQUFBLENBQWpCLENBRkEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgVGVzdFZpZXcgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3XG5cbiAgIGNsYXNzTmFtZTogJ3Rlc3QtdmlldydcblxuICAgaW5pdGlhbGl6ZTogLT5cbiAgICAgIEByZW5kZXIoKVxuXG4gICByZW5kZXI6IC0+XG4gICAgICAkaHRtbCA9IEAkZWwuaHRtbCBcIkhlbGxvIFRlc3RWaWV3IVwiXG4gICAgICAkaHRtbC5hcHBlbmRUbyAnYm9keSdcblxubW9kdWxlLmV4cG9ydHMgPSBUZXN0VmlldyIsInJlcXVpcmUgJy4vc3BlYy9tYWluLmNvZmZlZSciLCJUZXN0VmlldyA9IHJlcXVpcmUgJy4uLy4uL3NvdXJjZS9qcy92aWV3cy9UZXN0Vmlldy5jb2ZmZWUnXG5cbmRlc2NyaWJlICdWaWV3JywgLT5cblxuICAgQHZpZXcgPSBuZXcgVGVzdFZpZXdcblxuICAgYWZ0ZXIgPT5cbiAgICAgIEB2aWV3LnJlbW92ZSgpXG5cbiAgIGl0ICdTaG91bGQgZXhpc3QnLCA9PlxuICAgICAgZXhwZWN0KCBAdmlldyApLnRvLmV4aXN0XG5cbiAgIGl0ICdTaG91bGQgYXBwZW5kIGEgLnZpZXcgY2xhc3MgdG8gdGhlIGRvbScsIC0+XG4gICAgICBleHBlY3QoICQoJ2JvZHknKS5maW5kKCcudGVzdC12aWV3JykubGVuZ3RoICkudG8uZXF1YWwgMSJdfQ==

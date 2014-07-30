class TestView extends Backbone.View

   className: 'test-view'

   initialize: ->
      @render()

   render: ->
      $html = @$el.html "Hello TestView!"
      $html.appendTo 'body'

module.exports = TestView
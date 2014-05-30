
template = require './home-template.hbs'


class HomeView extends Backbone.View

   className: 'view'

   initialize: ->
      @render()

   render: ->
      $html = @$el.html template
         name: 'Dimitri Shostakovich'
         age: '49'

      $html.appendTo 'body'


module.exports = HomeView
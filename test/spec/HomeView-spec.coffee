
HomeView = require '../../src/scripts/views/home/HomeView.coffee'

describe 'View', ->

   @view = new HomeView


   after =>
      @view.remove()


   it 'Should exist', =>
      expect( @view ).to.exist


   it 'Should append a .view class to the dom', ->
      expect( $('body').find('.view').length ).to.equal 1

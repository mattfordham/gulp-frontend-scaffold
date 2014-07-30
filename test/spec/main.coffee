TestView = require '../../source/js/views/TestView.coffee'

describe 'View', ->

   @view = new TestView

   after =>
      @view.remove()

   it 'Should exist', =>
      expect( @view ).to.exist

   it 'Should append a .view class to the dom', ->
      expect( $('body').find('.test-view').length ).to.equal 1
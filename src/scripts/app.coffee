###*
 * Application Bootstrapper
 *
 * @author
 * @date
###

HomeView = require './views/home/HomeView.coffee'

class App

   constructor: ->
      new HomeView()


# Kick off the app
$ -> new App
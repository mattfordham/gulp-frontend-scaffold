config  = require './config'
src     = "#{__dirname}/../../#{config.jsDirectory}"

#--------------------------------------------------------
# Entries
#--------------------------------------------------------

module.exports =
  main: "#{__dirname}/../source/js/main.coffee"
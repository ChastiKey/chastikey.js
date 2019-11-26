/**
 * ## How to run this example:
 * .
 * > node ./PrintInConsole-sample.js
 */

var CK = require('..')

function calculateHumanTimeDDHHMM (seconds) {
  // Calculate human readible time for lock from seconds
  const timelocked = seconds
  var secs = parseInt(timelocked % 60)
  var min = Math.floor(timelocked / 60)
  var hrs = Math.floor(min / 60)
  var days = Math.floor(hrs / 24)
  min = min % 60
  hrs = hrs % 24

  const timeToShowDays = `${days > 9 ? +days : '0' + days}d`
  const timeToShowHours = `${hrs > 9 ? +hrs : '0' + hrs}h`
  const timeToShowMins = `${min > 9 ? +min : '0' + min}m`
  const timeToShowSecs = `${secs > 9 ? +secs : '0' + secs}s`

  return `${timeToShowDays} ${timeToShowHours} ${timeToShowMins} ${timeToShowSecs}`
}

new CK.ChastiKey().ListLocks.getByUsername('Emma')
  .then(function (resp) {
    var YourActiveLockedLocks = resp.getLocked

    // Assuming you have 1 lock in this Array
    var TheOneLock = YourActiveLockedLocks[0]

    // That One Lock
    console.log('The Lock:', TheOneLock)

    // Just printing to console for now
    console.log('Time Locked Calculated (seconds):', TheOneLock.totalTimeLocked)

    setInterval(function () {
      process.stdout.clearLine()
      process.stdout.cursorTo(0)
      // Show it in a more reasonable way
      process.stdout.write(`Totally not a robot version: ${calculateHumanTimeDDHHMM(TheOneLock.totalTimeLocked)}`)
    }, 1000)
  })
  .catch(function (error) {
    console.log('There was an error:', error)
  })

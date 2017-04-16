/* global $ */

var isHex = false

function init () {
  setInterval(setTime, 1000)

  function setTime () {
    var date = new Date()
    var hours = makeTwoDigitsTime(date.getHours())
    var minutes = makeTwoDigitsTime(date.getMinutes())
    var seconds = makeTwoDigitsTime(date.getSeconds())
    if (isHex) {
      $('#time').html(setHexTime(hours, minutes, seconds))
    } else {
      $('#time').html(hours + ':' + minutes + ':' + seconds)
    }
    setHexGradient(hours, minutes, seconds)
    setClockSize(seconds)
  }

  function makeTwoDigitsTime (time) {
    if (time < 10) {
      return '0' + time
    } else {
      return time
    }
  }

  function makeTwoDigitsHex (hexNum) {
    if (hexNum.length < 2) {
      return '0' + hexNum
    } else {
      return hexNum
    }
  }

  function setHexGradient (hours, minutes, seconds) {
    var hourHex = makeTwoDigitsHex(hours.toString(16))
    var minHex = makeTwoDigitsHex(minutes.toString(16))
    var secHex = makeTwoDigitsHex(seconds.toString(16))
    var hexGradient = '#' + hourHex + minHex + secHex
    $('.gradient').css('background', 'radial-gradient(circle, #fff, ' + hexGradient + ')')
    console.log(hexGradient)
  }

  function setClockSize (seconds) {
    var percentage = (100 - (seconds / 60 * 100)) * 2
    $('#hourglass').css({'width': percentage, 'height': percentage})
  }

  function setHexTime (hours, minutes, seconds) {
    var hourHex = makeTwoDigitsHex(hours.toString(16))
    var minHex = makeTwoDigitsHex(minutes.toString(16))
    var secHex = makeTwoDigitsHex(seconds.toString(16))
    return '#' + hourHex + ':' + minHex + ':' + secHex
  }

  $('#time').hover(function () {
    if (isHex) {
      isHex = false
    } else {
      isHex = true
    }
  })
}

$(document).ready(init)

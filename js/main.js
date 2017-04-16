/* global $ */

var isHex = false

function init () {
  setInterval(function getTime () {
    var date = new Date()
    var hours = makeTwoDigits(date.getHours())
    var minutes = makeTwoDigits(date.getMinutes())
    var seconds = makeTwoDigits(date.getSeconds())
    $('p#time').html(hours + ':' + minutes + ':' + seconds)
    setHexGradient(hours, minutes, seconds)
  }, 1000)

  function makeTwoDigits (time) {
    if (time.length < 2) {
      return '0' + time
    } else {
      return time
    }
  }

  getHexGradient()
  function getHexGradient () {
    var date = new Date()
    var hours = makeTwoDigits(date.getHours()).toString(16)
    var minutes = makeTwoDigits(date.getMinutes()).toString(16)
    var seconds = makeTwoDigits(date.getSeconds()).toString(16)
    isHex = true
    return '#' + hours + ':' + minutes + ':' + seconds
  }

  function setHexGradient (hours, minutes, seconds) {
    var hourHex = makeTwoDigits(hours.toString(16))
    var minHex = makeTwoDigits(minutes.toString(16))
    var secHex = makeTwoDigits(seconds.toString(16))
    var hexGradient = function () {
      return '#' + hourHex + minHex + secHex
    }
    $('.gradient').css('background', 'radial-gradient(circle, #fff, ' + hexGradient() + ')')
    console.log(hexGradient())
  }

  $('p#time').hover(function () {
    if (isHex) {
      $('p#time').html(getTime())
    } else {
      $('p#time').html(getHexGradient)
    }
  })
}
$(document).ready(init)

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
    if (time < 10) {
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
    console.log('#' + hours + minutes + seconds)
    // return '#' + hours + minutes + seconds
  }

  function setHexGradient (hr, min, sec) {
    var hourHex = hr.toString(16)
    var minHex = min.toString(16)
    var secHex = sec.toString(16)
    var hexGradient = '#' + hourHex + minHex + secHex
    console.log(hexGradient)
    $('.gradient').css('background-image', 'radial-gradient(circle, white, getHexGradient())')
  }

  $('p#time').hover(function () {
    if (isHex) {
    } else {
      $('p#time').html(hexColor)
    }
  })
}
$(document).ready(init)

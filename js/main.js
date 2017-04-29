/* global $ */

var isHex = false

setInterval(renderTime, 1000)
renderTime()

function renderTime () {
  var date = new Date()
  var hours = padTwoDigits(date.getHours())
  var minutes = padTwoDigits(date.getMinutes())
  var seconds = padTwoDigits(date.getSeconds())
  if (isHex) {
    $('#time').html(getHexTime(date))
  } else {
    $('#time').html(hours + ':' + minutes + ':' + seconds)
  }
  setHexGradient(hours, minutes, seconds)
  setClockSize(seconds)
}

function padTwoDigits (stringOrNumber) {
  stringOrNumber = stringOrNumber + ''
  if (stringOrNumber.length < 2) return '0' + stringOrNumber
  return stringOrNumber
}

function setHexGradient (hours, minutes, seconds) {
  var hourHex = padTwoDigits(hours.toString(16))
  var minHex = padTwoDigits(minutes.toString(16))
  var secHex = padTwoDigits(seconds.toString(16))
  var hexGradient = '#' + hourHex + minHex + secHex
  $('.gradient').css('background', 'radial-gradient(circle, #fff, ' + hexGradient + ')')
}

function setClockSize (seconds) {
  var percentage = (100 - (seconds / 60 * 100)) * 2
  $('#hourglass').css({'width': percentage, 'height': percentage})
}

function getHexTime (date) {
  var hourHex = padTwoDigits(date.getHours().toString(16))
  var minHex = padTwoDigits(date.getMinutes().toString(16))
  var secHex = padTwoDigits(date.getSeconds().toString(16))
  return '#' + hourHex + ':' + minHex + ':' + secHex
}

function mouseEnterTime () {
  isHex = true
  renderTime()
}

function mouseLeaveTime () {
  isHex = false
  renderTime()
}

$('#time').on('mouseenter', mouseEnterTime)
$('#time').on('mouseleave', mouseLeaveTime)

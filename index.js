function isPeak(departure) {
  var dateTime = new Date(departure)
  var dayOfWeek = dateTime.getDay()
  var hourOfDay = dateTime.getHours()

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    if (hourOfDay >= 7 && hourOfDay <= 10) {
      return true
    }

    if (hourOfDay >= 16 && hourOfDay <= 19) {
      return true
    }
  }

  return false
}

function calculateTicketPrice(departure, milesTraveled) {
  var peakUpcharge = isPeak(departure) ? 2.5 : 0

  return (milesTraveled * .35) + peakUpcharge
}

module.exports = { calculateTicketPrice }

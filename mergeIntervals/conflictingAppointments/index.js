function hasNoConflict(appointments) {
  // sort by starting time
  appointments.sort((a, b) => a[0] - b[0]);

  // loop
  let prev = appointments[0];

  for (let i = 1; i < appointments.length; i++) {
    let cur = appointments[i];

    if (cur[0] < prev[1]) return false;

    prev = cur;
  }
  return true;
}

module.exports = { hasNoConflict };

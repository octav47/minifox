const resetBirds = $('#reset-birds-button')

resetBirds.on('click', function () {
  console.log('reset birds')

  reactConnection.push({
    birds: 0
  })
})

var request = new XMLHttpRequest()

request.open('GET', 'http://weerlive.nl/api/json-data-10min.php?key=demo&locatie=Amsterdam ', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(liveweer=> {
      console.log(liveweer.temp
    })
  } else {
    console.log('error')
  }
}

request.send()

const app = document.getElementById('liveweer')

const logo = document.createElement('img')
logo.src = 'https://www.iphone.nl/uploads/cgblog/id370/weeronline.nl_downloaden.jpg'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://weerlive.nl/api/json-data-10min.php?key=f97777689c&locatie=groningen', true)
xhr.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(xhr.responseText)
  if (xhr.status >= 200 && xhr.status < 400) {
    data.liveweer.forEach(liveweer => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = liveweer.temp

      const h2 = document.createElement('h2')
      h2.textContent = liveweer.plaats

      container.appendChild(card)
      card.appendChild(h1)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Oops!`
    app.appendChild(errorMessage)
  }
}

xhr.send()

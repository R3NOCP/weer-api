const app = document.getElementById('liveweer');
    const logo = document.createElement('img');
    logo.src = 'https://www.iphone.nl/uploads/cgblog/id370/weeronline.nl_downloaden.jpg';

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(logo);
    app.appendChild(container);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://weerlive.nl/api/json-data-10min.php?key=f97777689c&locatie=Amsterdam', true);
    xhr.onload = function() {
        // Begin accessing JSON data here
        console.log(xhr.responseText);
        var data = JSON.parse(xhr.responseText);

        if (xhr.status >= 200 && xhr.status < 400) {
            console.log(data);


            data.liveweer.forEach(function(element) {
                console.log(element.plaats);
                console.log(element.temp);
            });
        } else {
            console.log('error')
        }
    };

    xhr.send();

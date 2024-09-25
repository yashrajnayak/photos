let data;

async function loadData() {
    const response = await fetch('photos-links.yml');
    const yamlText = await response.text();
    data = jsyaml.load(yamlText);
    renderGrid('cities');
}

function renderGrid(type, cityName = null, eventName = null) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    if (type === 'cities') {
        Object.keys(data).forEach(city => {
            const events = data[city].events;
            const randomEvent = events[Math.floor(Math.random() * events.length)];
            const randomPhoto = randomEvent.photos[Math.floor(Math.random() * randomEvent.photos.length)];
            addGridItem(container, randomPhoto, city, () => renderGrid('events', city));
        });
    } else if (type === 'events') {
        data[cityName].events.forEach(event => {
            const randomPhoto = event.photos[Math.floor(Math.random() * event.photos.length)];
            addGridItem(container, randomPhoto, event.date, () => renderGrid('photos', cityName, event.date));
        });
    } else if (type === 'photos') {
        const event = data[cityName].events.find(e => e.date === eventName);
        event.photos.forEach(photo => {
            addGridItem(container, photo, 'Download Now', null, photo);
        });
    }
}

function addGridItem(container, imageSrc, text, onClick, downloadLink = null) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    gridItem.appendChild(img);

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    gridItem.appendChild(overlay);

    const textElement = document.createElement('div');
    textElement.className = 'grid-text';
    textElement.textContent = text;
    gridItem.appendChild(textElement);

    if (downloadLink) {
        const link = document.createElement('a');
        link.href = downloadLink;
        link.className = 'download-link';
        link.textContent = text;
        link.download = '';
        gridItem.appendChild(link);
    } else {
        gridItem.addEventListener('click', onClick);
    }

    container.appendChild(gridItem);
}

window.onload = loadData;
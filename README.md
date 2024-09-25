# Photos

This is a responsive web application that displays a grid of cities, events, and photos.

## Features:

- **Responsive Design:** Adapts seamlessly to different screen sizes (desktop, mobile, etc.)

- **Grid Layout:** Utilizes a rectangular grid system to display city information.

- **City Grid:** Each grid element represents a city:
    - **Background Image:** Randomly chosen from a city's event photos (specified in YAML file).
    - **City Name:** Bold text positioned in the bottom left corner with padding.
    - **Blue Overlay:** Overlaid on the background image, with a gradient effect (darkest near text, fading outwards).

- **Event Grid (Secondary Click):** Clicking a city grid opens a new grid for that city's events:
    - **Event Date:** Replaces city name in the bottom left corner.
    - **Background Image:** Randomly chosen from all event photos.

- **Downloadable Event Image (Tertiary Click):** Clicking an event grid opens a similar grid with:
    - **Download Now Link:** Clicking this link downloads the event image.

- **Data Source:** Uses a YAML file (`photos-links.yml`) for easy data management:
    - Structure: `city_name > events > photo_paths` (photos within each event list)

## File Structure:

- `index.html`: Main application file.
- `style.css`: Stylesheet for app design.
- `script.js`: JavaScript code for functionality (grid layout, click events, etc.).
- `photos-links.yml`: YAML data file containing city and event information.

## How to Add a New Event

To add a new event to the app, follow these steps:

1. Open the `photos-links.yml` file.
2. Locate the city where you want to add the event.
3. Under the `events` key for that city, add a new event entry with the following structure:

```yaml
- date: "YYYY-MM-DD"
  photos:
    - "image_link1.jpg"
    - "image_link2.jpg"
    # Add more photo paths as needed
```

4. Replace `"YYYY-MM-DD"` with the actual date of the event.
5. Update the photo paths to match the new event photos you've added to the project.

The app will automatically load the new event and its photos the next time it's refreshed.

## Note

Make sure to place all event photos in the appropriate city folder within the `images` directory to maintain proper organization and ensure the app can locate the images correctly.

# GitTogether Photos

This is a responsive web application that displays a grid of cities, events, and photos.

## How to Add a New Event

To add a new event to the app, follow these steps:

1. Open the `photos-links.yml` file.
2. Locate the city where you want to add the event.
3. Under the `events` key for that city, add a new event entry with the following structure:

```yaml
- date: "YYYY-MM-DD"
  photos:
    - "images/cityname/eventX_photo1.jpg"
    - "images/cityname/eventX_photo2.jpg"
    # Add more photo paths as needed
```

4. Replace `"YYYY-MM-DD"` with the actual date of the event.
5. Update the photo paths to match the new event photos you've added to the project.
6. Save the `photos-links.yml` file.

The app will automatically load the new event and its photos the next time it's refreshed.

## Note

Make sure to place all event photos in the appropriate city folder within the `images` directory to maintain proper organization and ensure the app can locate the images correctly.
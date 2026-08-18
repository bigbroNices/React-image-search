# Image Search App

A simple image search application built with React and the Unsplash API.

The application allows users to search for images, explore suggested categories, view results in a responsive grid, download images, and open images in full resolution.

## Features

- Search images using the Unsplash API
- Random suggested search categories
- Responsive image grid
- Load more images
- Load multiple pages of results
- Download images
- Open images in full resolution
- Animated feedback messages
- Error message when no results are found

## Technologies

- React
- JavaScript
- CSS
- Unsplash API
- Motion
- Vite

Getting Started
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/image-search-app.git
cd image-search-app
2. Install dependencies
npm install
3. Add your Unsplash API key

The API key is stored in a separate local file and is not included in this repository.

Create the required file locally and add your Unsplash API key:

export const accessKey = "YOUR_UNSPLASH_ACCESS_KEY";

Make sure the file containing your API key is included in .gitignore.

For example:

node_modules/
src/accessKey.js
4. Start the development server
npm run dev

The application will be available at the local development URL provided by Vite.


## Unsplash API

This project uses the Unsplash API to search for and retrieve images.

You need your own Unsplash API access key to run the project locally.

The API key should not be committed to the repository.


## What I Practiced

This project was created as a React practice project.
While building it, I practiced:

- React components
- useState
- Props
- Callback functions
- API requests with fetch
- Async/await
- Working with external APIs
- Rendering dynamic data
- Array manipulation
- CSS Grid
- Flexbox
- Conditional rendering
- Basic animations
- Image downloading with JavaScript
- Working with browser APIs
- Git and GitHub

## Possible Improvements
- Add loading indicators
- Add infinite scrolling
- Add search filters
- Add image favorites
- mprove mobile responsiveness
- Add better error handling
- Add image attribution
- Add search history
- Add dark mode

## License

This project is licensed under the MIT License.

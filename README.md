# React - Plex Content Request

## Website concept

A website where people can request new content to be added to my Plex media server.

## Status

  - [x] Routing (react-router)
  - [x] Global State Management (Redux)
  - [x] i18n (react-i18next)
  - [x] Authentication ( Firebase Auth )
  - [x] CRUD operations with authorization ( Firebase Firestore )

## TODO

  - create GCP Cloud Function to notify users when a request is fulfilled
  - create GCP CLoud Function to notify admin when users register and/or login
  - Add imdb link badge when link is avaiable
  - Change `getImageSrc()` to use imdb API or similar
  - Use imdb API or similar on submit-request page

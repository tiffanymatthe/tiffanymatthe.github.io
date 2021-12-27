---
title: Picture-Spotify
image: music.png
tags:
  - Python
  - Flask
  - RESTful API
color: e0dfb2
titleColor: acab45
description: A web application that generates Spotify playlists using OpenCV and the Spotify API with Python.
year: 2021
---
[picture-spotify-app.herokuapp.com](http://picture-spotify-app.herokuapp.com/) | 
[picture-spotify - Github](https://github.com/tiffanymatthe/picture-spotify)

To help my brother learn Python, we created a Flask application that generates Spotify playlists based on an uploaded image. The colours from the image are extracted using OpenCV, and then associated to music genres based on xkcd's [Color Survey](https://blog.xkcd.com/2010/05/03/color-survey-results/). The playlist was created using the Spotify Web API with JSON metadata. To allow users to save the playlist, I implemented an implicit grant Spotify API authorization.

*Note: The website might take a while to load because Heroku unloads the app if enough time passes without activity.*
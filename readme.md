This app creates a random list of meals for the week.

Important notes to self about this project:

1. There is a pre-commit hook that retrieves database.json (meals) from Render server. It's here so that the database.json doesn't get overwritten with each commit.
2. Backend dashboard: https://dashboard.render.com/web/srv-cteqd4tds78s73dj1aeg/events
2a. All backend files are stored in a Render server
2b. The point of backend server is to retrieve and save into a json database
2c. List of API endpoints:
    https://kot-pawel-github-io.onrender.com/
    /meals -> gets meals
    /add-meal -> adds meals
    /delete-meal/:name -> deletes a meal
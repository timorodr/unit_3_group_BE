# Bookmark'd Backend

**Will be Deployed on Render**

### Trello Board: [Bookmarks | Trello](https://trello.com/b/PbczSanH/bookmarks)

## List of Dependencies

- dotenv
- express
- mongoose
- morgan
- cors

## Bookmark Model

{
title: { type: String, required: true },
url: { type: String, required: true },
}

## Route Map

| Route Name | Endpoint | Method | Description                     |
| ---------- | -------- | ------ | ------------------------------- |
| Index      | /        | GET    | Displays all bookmarks as JSON  |
| Destroy    | /id      | DELETE | Deletes a bookmark              |
| Update     | /id      | PUT    | Updates existing bookmark       |
| Create     | /        | POST   | Adds a bookmark to the database |


# Firebase Cloud Messaging (FCM) Notification Service

This project demonstrates how to send notifications using Firebase Cloud Messaging (FCM) with an Express.js server. The server provides an endpoint to send notifications to a specified device token.

## Project Structure

The project follows the Model-View-Controller (MVC) pattern with the following structure:

- `config/`: Contains configuration files and settings.
- `controllers/`: Contains the logic for handling requests and responses.
- `models/`: Defines data models (if needed).
- `routes/`: Defines API routes.
- `services/`: Contains service functions, such as interacting with Firebase.
- `app.js`: Entry point of the application.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Firebase:**

   - Place your Firebase service account JSON file in the `root/` directory and name it `firebase-service-account.json`.

4. **Start the Server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Send Notification

**Endpoint:** `POST /api/notifications/sendnotification`

**Request Body:**

```json
{
  "token": "your_device_token",
  "title": "Test Notification",
  "body": "This is a test notification sent via Postman.",
  "data": {
    "key1": "value1",
    "key2": "value2"
  }
}
```

- **`token`**: The FCM registration token of the target device.
- **`title`**: The title of the notification.
- **`body`**: The body text of the notification.
- **`data`**: Optional additional data to include with the notification.

**Example Request using cURL:**

```bash
curl -X POST http://localhost:3000/api/notifications/sendnotification \
-H "Content-Type: application/json" \
-d '{
  "token": "your_device_token",
  "title": "Test Notification",
  "body": "This is a test notification sent via Postman.",
  "data": {
    "key1": "value1",
    "key2": "value2"
  }
}'
```

**Example Request using Postman:**

1. Open Postman.
2. Set the request type to `POST`.
3. Enter the URL `http://localhost:3000/api/notifications/sendnotification`.
4. In the "Headers" tab, set `Content-Type` to `application/json`.
5. In the "Body" tab, select "raw" and enter the JSON payload.
6. Click "Send" to send the notification.

## Development

- **Run Tests:** Tests can be added in the `tests/` directory. Use `npm test` to run them.
- **Lint Code:** Use `npm run lint` to check code quality and style.

## Contributing

Feel free to fork the repository, make changes, and submit a pull request. Please follow the project's coding standards and guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Firebase for providing Cloud Messaging services.
- Express.js for the web framework.
- Axios for HTTP requests.

```

This `README.md` now includes detailed instructions for using the API endpoint, including example requests using both cURL and Postman.
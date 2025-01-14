# MirageUI Backoffice

The MirageUI Backoffice is the administrative interface where you can adjust all the settings for your MirageUI application. This backoffice allows you to create and manage configuration files that will be fetched by the server and communicated to the front end.

## Features

- Adjust application settings
- Manage configuration files
- Real-time updates to the server and front end

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Yarn package manager
- Docker and Docker Compose

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/MirageUI.git
   cd MirageUI/backoffice
   ```

2. Install dependencies:

   ```sh
   yarn install
   ```

### Running the Backoffice

You can run the backoffice in development mode using Docker Compose:

1. Start the services:

   ```sh
   docker compose up --build
   ```

2. Access the backoffice at `http://localhost:3001`.

### Development

To start the backoffice in development mode without Docker:

1. Start the development server:

   ```sh
   yarn dev
   ```

2. Access the backoffice at `http://localhost:3001`.

### Building for Production

To build the backoffice for production:

1. Build the project:

   ```sh
   yarn build
   ```

2. Start the production server:

   ```sh
   yarn start
   ```

### File Structure

- `src/`: Contains the source code for the backoffice.
- `public/`: Contains static assets.
-

Dockerfile

: Docker configuration for the backoffice.

-

docker-compose.yml

: Docker Compose configuration for the entire MirageUI application.

### Contributing

We welcome contributions to the MirageUI Backoffice. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Contact

For any questions or feedback, please contact us at [support@mirageui.com](mailto:support@mirageui.com).

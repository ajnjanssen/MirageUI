# MirageUI

Welcome to **MirageUI**, a comprehensive library of user interface components designed specifically for React applications. Our goal is to empower developers with a robust, flexible, and visually appealing toolkit for building modern web applications effortlessly.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Using Docker](#using-docker)
- [Usage](#usage)
- [Contributing](#contributing)
  - [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

---

## Introduction

MirageUI provides an extensive range of UI components, such as buttons, forms, containers, and more. Designed with customization and flexibility in mind, each component ensures seamless integration into your project while maintaining a modern and accessible design.

---

## Features

- **Modern Design:** Enhance your applications with a clean and contemporary look.
- **Customizable Components:** Tailor components to suit your specific needs effortlessly.
- **TypeScript Support:** Enjoy type safety and an enhanced development experience.
- **Responsive and Accessible:** Ensure usability across devices and for all users.
- **Seamless React Integration:** Easily add MirageUI components to your React projects.

---

## Installation

To get started with MirageUI, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/yourusername/mirageui.git
cd mirageui
```

Install the dependencies:

```bash
yarn install
```

---

## Running the Project

### Locally

To run the project locally, use the following command:

```bash
yarn run dev
```

The application will be available at `http://localhost:3000`.

### Using Docker

To run the project using Docker, follow these steps:

#### 1. Create a `Dockerfile`

Create a `Dockerfile` in the root of your project with the following content:

```Dockerfile
FROM node:18

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
```

#### 2. Create a `docker-compose.yml` file

Create a `docker-compose.yml` file in the root of your project with the following content:

```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: yarn dev
```

#### 3. Build and Run the Docker Container

Use the following commands to build and start the Docker container:

```bash
docker-compose down
docker-compose up --build
```

This will start the application in development mode with hot reloading enabled. Changes made to your local files will automatically reflect in the running container.

#### 4. Access the Application

Open your browser and navigate to `http://localhost:3000`.

---

## Usage

Here is a basic example of how to use MirageUI components in your React application:

```jsx
import { SectionHeader } from 'mirageui';

const LibraryPage = () => (
  <SectionHeader
    width="w-full"
    headerText="Library"
    headerSize={1}
    headerColor="primary"
    subText="This is the library page"
    textColor="secondary"
    textSize="large"
    textLeading="relaxed"
    container
  />
);

export default LibraryPage;
```

---

## Contributing

We welcome contributions from the community! If you encounter issues or have ideas for new features, feel free to open an issue or submit a pull request on GitHub.

### Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

---

## License

MirageUI is licensed under the MIT License.

&copy; 2024 MirageUI. All rights reserved.


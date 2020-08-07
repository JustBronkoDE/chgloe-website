# Readme

## Development

To develop on the client-side locally start the Docker containers by `docker-compose up -d`. Going into the `tooling` container with `docker-compose tooling bash` you will be able to serve the application with a provided npm script `npm run serve`. As configured in the `docker-compose.yml` the application will run on `localhost:8080`. If your local port `8080` is occupied you can change to different port in the mentioned `.yml` file.

## Contributing

Please read the [contributing guidelines](CONTRIBUTING.md) to get an idea how to contribute to this project.

## Project scripts

### Install packages

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Docker

When working with a Docker environment some additional settings are required.

- Install `serve` in the container, if not done already.
- Expose port `5000` in the `Dockerfile` of the tooling container.

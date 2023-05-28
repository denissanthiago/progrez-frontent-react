# Progrez Dashboard React web

This project is a dashboard template that may be use to manage your next operation.

## Instructions to run the dashboard

To run locally you must first install Node. For the required version see package.json. After installing Node and cloning this repo the following commands will get you up and running.

```
    npm install -g json-server
```

```
    npm install -D json-server
```

```
    npm install (install the requirements)
    npm run dev (start the application locally)
```

## Dependencies

This project uses React (v18.2.0) + ReactDom (v18.2.0) + typescript (v5.57.1) and Webpack 4 for compilation.

## Included packages

This configuration has following convenience packages:

- vite
- typescript
- json-server
- eslint

## Folder structer

```
|-- node_modules
|-- public
|   |-- vite.svg
|-- src
|   |-- assets
|       |--- Arrow Down.svg
|       |--- bg-content.jpg
|       |--- Isotipo.svg
|       |--- Private-CEO.svg
|       |--- Tu PruTec.svg
|   |-- components
|   |   |-- Footer
|           |--- index.tsx
|           |--- styles.module.css
|   |   |-- Header
|           |--- index.tsx
|           |--- styles.module.css
|   |   |-- Layout
|           |--- index.tsx
|           |--- styles.module.css
|   |   |-- MainSection
|           |--- index.tsx
|           |--- styles.module.css
|   |   |-- Nav
|           |---   index.tsx
|           |--- styles.module.css
|   |-- hooks
        `-- useGetData.ts
|   |-- pages
|   |   `-- HomePage.tsx
|   `-- index.css
|   `-- main.tsx
|   `-- vite-env.d.ts
|-- index.html
|-- README.md
|-- package-lock.json
`-- package.json
|-- pnpm-lock.yaml
|-- service.json
|-- tsconfig.json
|-- tsconfig.node.json
`-- vite.config.ts
```

As there are no strict rules about making a structure for React vite, this configuration proposes the following:

- assets - All images, fonts and other assets live here
- service.json - It is extremely useful to have your plain JSON data.All service classes live here
- react - All layout, route and high-order (hoc) components live here
- styles - All global and re-usable CSS live here

## UI Framework

Despite that this setup does not incorporate any frameworks such as Bootstrap, Material or others
Current setup has CSS Modules support, while it has global CSS support:

- src/react - Local styles (CSS Modules enabled)
- src/styles - Global styles, imports from npm, GUI components, etc.

[Flexboxgrid](http://flexboxgrid.com/) was chosen as grid system.

You can modify the grid variables in `src/styles/grid.scss`

## Development

Clone this repository and remove `.git` directory before using:

```
rm -rf .git
```

Add your own git repository by issuing:

```
git init
git add .
git commit -am 'Initial commit'
git remote add origin git@github.com:USERNAME/REPOSITORY.git
```

To start the development server run:

```
npm run dev
```

## Production

Run in terminal:

```
npm run dev
```

And then the compiled frontend will be served on http://localhost:5173/ or any other port specified by `PORT` environment variable.

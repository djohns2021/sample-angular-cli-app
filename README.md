# SampleAngularCliApp

This project is a work in progress to display some cool things about what angular can do. It was initially generated with the Angular CLI
and then modified there to show a home screen that randomly generates the next twelve days forecast. It is not a showcase of the most
optimal code or practices , but it shows how an angular app can be assembled easily in a single day.

## How to Run Application

This application requires that the Angular CLI is installed. This can easily be done by globally installing it with NPM/Yarn by following
these steps: https://angular.io/cli

1. Clone the repository
2. Navigate to the root folder of the project (where the `package.json` lives).
3. Install the package dependencies by running either `yarn` or `npm install` (If port `4200` is already in use, a different one 
can be used by using `--port`).
4. Run `yarn start` or `npm start` or `ng serve` to run the server.
5. Navigate in a browser to `localhost:4200` to see the site. (If port `4200`, you can change )

An unhandled exception occurred: Port 4200 is already in use. Use '--port' to specify a different port.


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Things To Do:
- Improve models
- Better routing (Link to specific temp?)
- Unit tests
- Host icons on a CDN (not gonna pay for that for a sample app though)
- Integrate some sort of build/deploy system
- Bring in immutable
- State Management/Some Services

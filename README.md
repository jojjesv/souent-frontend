# Social Entreprenour App

##  Frontend
The frontend is powered by React with Typescript and Webpack. Run `npm run watch` to compile and bundle the source files in real time.

### File structure
####  Components
Any common component should be put under `src/common` and have its own directory, containing an `index.tsx` and optionally `styles.scss`.
For instance: `src/common/list_view/index.tsx`.

####  Models
Any models (data classes) should be put under `src/models`.

##  Backend
The backend is powered by Node.JS with Typescript. Make sure to install all dependencies by running `npm install` after cloning the project. Run `npm run build` to build the source files or `npm run watch` to build the source files in real time.

##  Database
The database is of relational nature and is powered by MySQL. 
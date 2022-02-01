# Contributing to the boilerplate-nextjs

Thanks for taking the time to contribute !

### Branch Name

```
Master --> only for live production. Don't commit and push on this branch. Branch update only from pull-request.
Staging --> only for live staging. Don't commit and push on this branch. Branch update only from pull-request.
Development --> only to combine several local branches.
Username_Develover --> This example branch development for each developer for all jobs eg: Eko_develop
```

## Setup

Install the dependencies

```shell
yarn
yarn start
```

Don't forget to setup your IDE with `eslint` and `prettier`.

## Project structure

- **commons** contains generic components used inside the application.
  - **components** contains generic components used inside the application.
  - **context** contains global contexts (separated from the redux store).
  - **hoc** contains generic high order components used inside the application.
  - **hooks** contains generic hooks functions.
  - **layouts** contains generic layout used inside the application.
- **config** contains all the config files and ABIs.
- **lib** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **modules** contains the modules of the app.
  - **modules-1** example module-1.
  - **modules-2** example module-2.
  - **etc** etc.
- **pages** contains route from nextjs.
- **services** contains generic service functions.
- **styles** contains generic all styles globals.
  - **Fonts** contains generic configuration fonts family css.
  - **Globals** contains generic globals css.
  - **Import** contains generic import css from third party library.
  - **index** main css.
  - **Variables** contains generic configuration variables css.

## Files naming

File naming uses capitalize except:

- **Folder inside src.**
- **Files in the hoc folder.**
- **Files in the hooks folder.**

## Tests

Run tests with `yarn test`.

## Build for production

Run build static files with `build-static`.
static files will be in the out folder.

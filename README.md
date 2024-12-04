


## Background
See [this comment from @kauhat](https://github.com/tinacms/tinacms/issues/4497#issuecomment-2484316664) discussing Astro + Tina visual editing. This is a fork of the `develop` branch of kauhat's repo: https://github.com/kauhat/astro-5-tina-collections/tree/develop. 


## Features:

Original features:
- uses custom loaders available in Astro 5
- content management with Tina
- live visual editing with Tina
- live editing includes clickable elements in the preview


Tweaks I've added:
- switched to yarn
- updated to Tina 2.5.0 and Astro 5.0.2
- removed tags and categories
- removed some unused files


## Commands

This project uses yarn. To install it, run:

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `yarn install`     | Installs dependencies                        |
| `yarn dev`         | Starts local dev server at `localhost:4321`  |
| `yarn build`       | Build your production site to `./dist/`      |
| `yarn preview`     | Preview your build locally, before deploying |



## License

This template is [MIT](LICENSE) licensed.

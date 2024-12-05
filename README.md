


## Background
* This is a fork of the `develop` branch of kauhat's repo: https://github.com/kauhat/astro-5-tina-collections/tree/develop (mentioned in [this thread](https://github.com/tinacms/tinacms/issues/4497#issuecomment-2484316664))
* See [this discussion](https://discord.com/channels/830184174198718474/1019713903481081876/threads/1297240670121099405) in the Astro discord server about conditional `client:tina` application.

## Features:

Original features:
- uses custom loaders available in Astro 5
- content management with Tina
- live visual editing with Tina
- live editing includes clickable elements in the preview


Tweaks I've added:
- Added conditional rendering of `client:tina` so that Astro islands only load in development, not production
- switched to yarn
- updated to Tina 2.5.0 and Astro 5.0.2
- removed tags and categories (so I could get `yarn build` working without errors)
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

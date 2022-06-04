# cra-template-typescript-chrome-extension

This is an unofficial TypeScript Chrome Extension template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template typescript-chrome-extension` when creating a new app.

For example:

```sh
npx create-react-app my-app --template typescript-chrome-extension

# or

yarn create react-app my-app --template typescript-chrome-extension
```

## Additional Scripts

This template comes with husky, prettier and lint-staged pre-installed to enhance your workflow.

You can setup this workflow run the following command:

### `npm run husky:setup`

Install husky and create a pre-commit file which execute `npx lint-staged` before commiting files to github.

Lint-staged will execute a routine to do, for now it will format all the files using prettier.

You can modify this routine by editing the file `.lintstagedrc` located at the root of the project.

For more information, please refer to:

- [Getting Started](https://developer.chrome.com/docs/extensions/mv3/getstarted) – How to create a chrome extension.
- [API Reference](https://developer.chrome.com/docs/extensions/reference) – API Reference to build chrome extension.
- [Create React App Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
- [TypeScript](https://www.typescriptlang.org/) – TypeScript documentation.
- [Prettier](https://prettier.io/) – Prettier documentation.
- [Husky](https://github.com/typicode/husky) – Husky documentation.
- [Lint-staged](https://github.com/okonet/lint-staged) – Lint-staged documentation.

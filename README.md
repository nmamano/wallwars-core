# wallwars-core

Core logic of the wallwars game and variants.

## Workflow for working with the package

This is a reminder for how to update and use this package.

1. Make changes in `src/`.
2. Increment the version number in `package.json`.
3. Build. This transpiles `ts` to `js` and generates the `.d.ts` file with type descriptions.

`npm run build`

4. Run tests (not available yet).
5. Commit and push to github. This is not necessary for the following steps,
   but doing it now keeps npm and github stay consistent.
6. Publish to npm.

`npm publish`

7. Update the version in each of the browser and node.js packages.

`npm install wallwars-core@latest`

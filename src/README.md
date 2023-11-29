# Your Cool Amplenote Plugin

In this section you can provide some details about the [Amplenote plugin](https://www.amplenote.com/help/developing_amplenote_plugins) 
that this repo will implement.

## Testing

Run `NODE_OPTIONS=--experimental-vm-modules npm test` to run the tests.

If it complains about jsdom being absent, run `npm install -D jest-environment-jsdom` and try again.

### With JetBrains

If you are using a JetBrains IDE (Webstorm, Rubymine, anything that speaks Javascript), you can get an 
excellent debugging environment to run your tests.

[Read how to set up tests with this environment in JetBrains IDEs](https://public.amplenote.com/GPTbAGiRYddSCLtuTXGS1tSo).

### Run tests continuously as modifying the plugin

```bash
NODE_OPTIONS=--experimental-vm-modules npm run test -- --watch
```

## Technologies used to help with this project

* https://esbuild.github.io/getting-started/#your-first-bundle
* https://jestjs.io/
* https://www.gitclear.com

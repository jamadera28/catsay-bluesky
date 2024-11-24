# catsay-bluesky
Catsay bot for Bluesky

## Requirements

Please install the `atproto` npm package.

```
npm i @atproto/api
```

The `fortune` package is required from `apt` by default. Otherwise, please modify the `exec.sh` script to pass any form of standard input to `java Catsay`.

Please make the `BLUESKY_HANDLE` and `BLUESKY_PASSWORD` variables available to your environment.


## Installation

Please build the `Catsay` Java executable with

```
javac Catsay.java
```

The `process`, `@types/node`, and `dotenv` npm packages are required.

Initalize the TypeScript environment with `tsc --init`. Then compile with `tsc`.



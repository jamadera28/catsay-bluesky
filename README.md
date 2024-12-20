# catsay-bluesky
Catsay bot for Bluesky

## Requirements

Please install the `atproto` npm package. The `process`, `@types/node`, and `dotenv` npm packages are also required.

```
npm i @atproto/api
npm i process
npm i @types/node
npm i dotenv
```

The `fortune` package is required from `apt` by default. Otherwise, please modify the `exec.sh` script to pass any form of standard input to `java Catsay`.

Please make the `BLUESKY_HANDLE` and `BLUESKY_PASSWORD` variables available to your environment.


## Installation

Please build the `Catsay` Java executable with

```
javac Catsay.java
```

Initalize the TypeScript environment and then compile the posting script.

```
tsc --init
tsc
```

## Running

An example pipelined shell script could look something like this, which lazily expects a future return code from post.js to eventually be 0 if all goes well:

```
#! /bin/sh

...

until /usr/games/fortune -n 50 | java Catsay | node post.js ; do
    echo "Retrying..."
done

echo "Done."
```



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
To build the C program which takes the generated text from stdin and print it to stdout plus the cat and the speech `~` characters:

```
gcc -o catsay add_cat.c
```


~~Please build the `Catsay` Java executable with~~

~~```~~
javac Catsay.java
~~```~~


Initalize the TypeScript environment and then compile the posting script.

```
tsc --init
tsc
```

## Running

`exec_safe.sh` implements a shell script to be run over `cron` using pipelined shell programs to generate a fortune, wrap the text to fit within the acceptable number of columns for a BlueSky post, and then add the speech `~`s and the cat.



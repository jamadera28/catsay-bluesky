# catsay-bluesky
Catsay bot for Bluesky

## Requirements

Please install the `atproto` pip package.

```
pip install atproto
```

The `fortune` package is required from `apt` by default. Otherwise, please modify the `exec.sh` script to pass any form of standard input to `java Catsay`.


## Installation

Please build the `Catsay` Java executable with

```
javac Catsay.java
```

Please make the `BLUESKY_HANDLE` and `BLUESKY_PASSWORD` variables available to your environment.


## Issues

It appears that the `atproto` import process requires OpenSSL>=3.0 for some cryptography operations. 

from atproto import Client
import os
import sys

def main():
    client = Client()
    client.login(os.getenv('BLUESKY_HANDLE'), os.getenv('BLUESKY_PASSWORD'))

    lines = ""
    while True:
        try:
            line = input()
        except EOFError:
            break
        lines += (line + '\n')

    print(lines, file=sys.stderr)
    print('Num Chars:', len(lines), file=sys.stderr)
    if len(lines) > 300 or len(lines) == 0:
        os._exit(1)
    else:
        post = client.send_post(lines)
        os._exit(0)


if __name__ == '__main__':
    main()

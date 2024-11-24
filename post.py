from atproto import Client
import os

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

    print(lines)
    print('Num Chars:', len(lines))
    if len(lines) > 300 or len(lines) == 0:
        return 1
    else:
        post = client.send_post(lines)
        return 0


if __name__ == '__main__':
    main()

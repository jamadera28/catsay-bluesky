#! /bin/sh


until $(fortune -n 50 | java Catsay | python3 post.py); do
    echo "Retrying..."
done

echo "Done."

#! /bin/sh


until $(fortune -n 50 | java Catsay | node post.js); do
    echo "Retrying..."
done

echo "Done."

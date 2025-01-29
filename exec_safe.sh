#! /bin/sh

retval="1"
until [ "$retval" = "0" ] ; do
    text=$(/usr/games/fortune -u -n 175 | tr -d "\t" | fold -s -w 29 | ./catsay)
    retval="$?"
    echo "$retval"
    if [ "$retval" = 1 ] ; then
        echo "Retrying..."
    fi
done
echo "$text" | node post.js
echo "Done."

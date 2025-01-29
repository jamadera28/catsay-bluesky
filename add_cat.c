#include <stdio.h>
#include <string.h>

char *cat = "   ^~^      , \n (' Y ' )   )\n /        \\  / \n( \\ |||  /) hjw\n";

char *head = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";

void multichar(char);
int main(int argc, char *argv[])
{
    char buf[175];
    void *s;
    s = &buf;
    int c, i = 0;
    while ((c = getchar()) != EOF)
    {
        buf[i] = c;
        if (i > 174)
            return 1;
        i++;
    }
    buf[i] = '\0';
    printf("%s", head);
    printf("%s", buf);
    printf("%s", head);
    printf("%s", cat);
}




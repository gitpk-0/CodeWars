#include <cs50.h> // get_char, get_string
#include <stdio.h>
#include <stdlib.h> // atoi -- convert string to number
#include <string.h> // strlen
#include <ctype.h>  // isdigit

int main(int argc, string argv[])
{
    // ensuring single command argument is received
    if (argc > 2 || argc < 2)
    {
        // returning usage parameters if more than one argument is input
        printf("Usage: ./caeser key\n");
        return 1;
    }

    string arg = argv[1];
    // ensure argument is digits only
    for (int i = 0, len = strlen(argv[1]); i < len; i++)
    {

        if (!isdigit(arg[i]))
        {
            printf("Usage: ./caeser key\n");
            return 1;
        }
    }

    // convert arg from string to int
    int argi = atoi(arg);

    // prompting user for plaintext
    string plain = get_string("plaintext:  ");

    // encipher the plaintext
    int INDEX[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25};
    printf("ciphertext: ");
    // looping thru each letter character the user inputs
    for (int i = 0, len = strlen(plain); i < len; i++)
    {
        // upper case
        if (isupper(plain[i]))
        {
            // converting ASCII value to INDEX value
            int indexVal = INDEX[(plain[i] - 'A')];
            // plaintext to ciphertext formula (c = (p + k) % 26))
            int cipherIndex = INDEX[(indexVal + argi) % 26];
            // converting cipherINDEX value back to ASCII
            int cipher = cipherIndex + 'A';
            // printing each cipher character
            printf("%c", cipher);
        }
        // lower case
        else if (islower(plain[i]))
        {
            // converting ASCII value to INDEX value
            int indexVal = INDEX[(plain[i] - 'a')];
            // plaintext to ciphertext formula (c = (p + k) % 26))
            int cipherIndex = INDEX[(indexVal + argi) % 26];
            // converting cipherINDEX value back to ASCII
            int cipher = cipherIndex + 'a';
            // printing each cipher character
            printf("%c", cipher);
        }
        // non alphabetical characters
        else
        {
            // printing each non-alpha character as it was given, no change
            printf("%c", plain[i]);
        }
    }
    printf("\n");
    return 0;
}
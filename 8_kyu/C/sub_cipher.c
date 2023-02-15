#include <cs50.h>
#include <stdio.h>
#include <string.h> // strlen()
#include <ctype.h>  // isalpha()

int main(int argc, string argv[])
{
    string arg = argv[1];

    // ensuring single command argument is received
    if (argc < 2 || argc > 2)
    {
        // returning usage parameters if more than one argument is input
        printf("Usage: ./substitution key\n");
        return 1;
    }

    int key_len = strlen(argv[1]);
    if (key_len < 26 || key_len > 26)
    {
        // returning usage parameters if more than one argument is input
        printf("Key must contain 26 characters.\n");
        return 1;
    }

    for (int i = 0; i < key_len; i++)
    {
        // ensure argument is alpha characters only
        if (!isalpha(arg[i]))
        {
            printf("Key must only contain alphabetic characters.\n");
            return 1;
        }

        for (int j = 0; j < key_len; j++)
        {
            // ensure key does not contain repeat letters
            if (i != j && arg[i] == arg[j])
            {
                printf("Key must not contain repeated characters.\n");
                return 1;
            }
        }
    }

    // prompting user for plaintext
    string plain = get_string("plaintext:  ");
    // finding the length of the users input
    int plain_length = strlen(plain);

    // for clarity setting the encrpytion key to KEY variable (duplicate)
    string KEY = argv[1];

    printf("ciphertext: ");
    // encipher the plaintext
    for (int i = 0; i < plain_length; i++)
    {
        // upper case input
        if (isupper(plain[i]))
        {
            // subtracting 65 ('A') from plaintext index
            // returns KEY index location given to cipher
            int cipher = KEY[(plain[i] - 'A')];
            // preserving case with output
            printf("%c", toupper(cipher));
        }
        // lower case input
        else if (islower(plain[i]))
        {
            // subtracting 97 ('a') from plaintext index
            // returns KEY index location given to cipher
            int cipher = KEY[(plain[i] - 'a')];
            // preserving case with output
            printf("%c", tolower(cipher));
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
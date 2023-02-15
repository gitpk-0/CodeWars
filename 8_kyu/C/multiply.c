#include <stdio.h>

int multiply(int a, int b)
{
    int answer = a * b;
    return answer;
}

int main(void)
{
    // test case
    printf("%i\n", multiply(3,4));
}
public class Main {

    public static char[] reverseString(char[] s) {
        for (int i = 0; i < s.length / 2; i++) {
            char temp = s[i];
            s[i] = s[s.length - 1 - i];
            s[s.length - 1 - i] = temp;
        }

        return s;
    }

    public static void main(String[] args) {
        System.out.println(reverseString(new char[]{'h', 'e', 'l', 'l', 'o'}));
        System.out.println(reverseString(new char[]{'H', 'a', 'n', 'n', 'a', 'h'}));
    }
}
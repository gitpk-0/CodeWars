public class PalindromeCheck {

    public static void main(String[] args) {
        String string = "abcdcba";
        System.out.println(PalindromeCheckProgram0.isPalindrome(string)); // true

        String string1 = "abfcdcba";
        System.out.println(PalindromeCheckProgram0.isPalindrome(string1)); // false

        String string2 = "abcdcba";
        System.out.println(PalindromeCheckProgram1.isPalindrome(string2)); // true

        String string3 = "abfcdcba";
        System.out.println(PalindromeCheckProgram1.isPalindrome(string3)); // false
    }
}


// my solution - time = O(n) [to reverse each char in string] n = length of input string | space = O(n) [for sb object]
class PalindromeCheckProgram0 {
    public static boolean isPalindrome(String str) {
        String string = new StringBuilder().append(str).reverse().toString();
        return str.equals(string);
    }
}

// optimal solution - time = O(n) | space = O(1)
class PalindromeCheckProgram1 {
    public static boolean isPalindrome(String str) {
        int lIdx = 0;
        int rIdx = str.length() -1;

        while (lIdx < rIdx) {
            if (str.charAt(lIdx) == str.charAt(rIdx)) {
                lIdx++;
                rIdx--;
            } else {
                return false;
            }
        }
        return true;
    }
}
package main;

/**
 * @author Patrick Kell
 */
public class Solution {

    public static boolean validParentheses(String parens) {
        int open = 0;
        int close = 0;
        boolean isOpen = false;

        // Put code below
        for (char c : parens.toCharArray()) {
            // character was a closing parentheses but an open parentheses has not preceded it
            if (Character.valueOf(c).equals(')') && !isOpen) {
                return false;
            }

            if (Character.valueOf(c).equals('(')) {
                open += 1;
                isOpen = true;
            }

            if (Character.valueOf(c).equals(')')) {
                close += 1;
                if (open == close) {
                    isOpen = false;
                }
            }
        }

        return open == close;
    }
}

package main;

public class Kata {
    public static String removeParentheses(final String str) {
        StringBuilder output = new StringBuilder();
        boolean open = false;
        int count = 0;

        for (char c : str.toCharArray()) {
            if (c == '(') {
                open = true;
                count++;
            }

            if (c == ')') {
                count--;
                if (count == 0) {
                    open = false;
                    continue;
                }
            }

            if (open) {
                continue;
            }

            if (!open && count == 0) {
                output.append(c);
            }
        }
        return output.toString();
    }

    public static void main(String[] args) {
        // String string = "example(unwanted thing)example";
        // String string = "example (unwanted thing) example";
        // String string = "a (bc d)e";
        // String string = "a(b(c))";
        // String string = "hello example (words(more words) here) something";
        String string = "(first group) (second group) (third group)";
        System.out.println(removeParentheses(string));
    }
}
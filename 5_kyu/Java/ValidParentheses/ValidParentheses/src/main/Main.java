package main;

public class Main {
    public static void main(String[] args) {

        System.out.println(Solution.validParentheses("()")); // true
        System.out.println(Solution.validParentheses("())")); // false
        System.out.println(Solution.validParentheses("32423(sgsdg)")); // true
        System.out.println(Solution.validParentheses("(dsgdsg))2432")); // false
        System.out.println(Solution.validParentheses("adasdasfa")); // true
        System.out.println(Solution.validParentheses(")(.f=")); // false
        System.out.println(Solution.validParentheses("())(")); // false
        System.out.println(Solution.validParentheses("h:x()eG0b(1(uFvf(=L))0YR9:Lfw)")); // true
        System.out.println(Solution.validParentheses("(())")); // true
    }

    private static int add(int int1, int int2) {
        int sum = int1 + int2;
        return sum;
    }
}
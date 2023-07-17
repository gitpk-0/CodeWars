public class RecursionExample {
    public static void main(String[] args) {
        int start = 1;
        int end = 5;
        int result = sumRange(start, end); // 15
        System.out.println("The sum of the range from " + start + " to " + end + " is: " + result);
    }

    public static int sumRange(int start, int end) {
        // base case
        if (start == end) {
            return start;
        }

        return start + sumRange(start + 1, end);
    }
}

class RecursionExample1 {
    public static void main(String[] args) {
        int base = 2;
        int exponent = 3;
        int result = power(base, exponent); // 8

        System.out.println(base + " raised to the power of " + exponent + " is: " + result);
    }

    public static int power(int base, int exponent) {
        // base case, exponent = 0, return 1
        if (exponent == 0) {
            return 1;
        }

        return base * power(base, exponent - 1);
    }
}
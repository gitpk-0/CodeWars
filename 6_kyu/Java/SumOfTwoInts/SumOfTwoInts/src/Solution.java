public class Solution {

    public static int add(int x, int y) {
        while (y != 0) {
            int carry = x & y; // carry now contains common set bits of x and y

            x = x ^ y; // sum of bits of x and y where at least one of the bits is not set

            y = carry << 1; // carry is shifted by one so that adding it to x gives the required sum
        }
        return x;
    }
    public static void main(String[] args) {
        System.out.println(add(1, 2)); // 3
        System.out.println(add(5, 19)); // 24
        System.out.println(add(23, 17)); // 40
        System.out.println(add(-14, -16)); // -30
        System.out.println(add(-50, -176)); // -226
        System.out.println(add(-10, -29)); // -39
        System.out.println(add(-13, 13)); // 0
        System.out.println(add(-27, 18)); // -9
        System.out.println(add(-90, 30)); // -60
    }
}
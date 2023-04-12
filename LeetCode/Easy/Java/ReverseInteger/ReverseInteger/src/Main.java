import java.util.ArrayList;
import java.util.Arrays;

public class Main {

    public static int reverse(int x) {
        String reversed = new StringBuilder().append(Math.abs(x)).reverse().toString();
        try {
            return (x < 0) ? Integer.parseInt(reversed) * -1 : Integer.parseInt(reversed);
        } catch (NumberFormatException e) {
            return 0;
        }
    }

    public static void main(String[] args) {
        System.out.println(reverse(123)); // 321
        System.out.println(reverse(-123)); // -321
        System.out.println(reverse(-10)); // -1
        System.out.println(reverse(10)); // 1
        System.out.println(reverse(901000)); // 109
        System.out.println(reverse(-901000)); // -109
        System.out.println(reverse(120)); // 21
        System.out.println(reverse(1209999999)); // 0 (not an int)
    }
}
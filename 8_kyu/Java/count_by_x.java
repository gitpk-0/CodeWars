import java.util.ArrayList;

public class Kata {
    public static int[] countBy(int x, int n) {


        ArrayList<Integer> numbers = new ArrayList<>();
        int current = x;
        while (current <= n) {
            numbers.add(current);
            current += x;
        }
        System.out.println(numbers);
        return numbers;
    }
}
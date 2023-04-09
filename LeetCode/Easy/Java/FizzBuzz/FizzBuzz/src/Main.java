import java.util.ArrayList;
import java.util.List;

public class Main {

    public static List<String> fizzBuzz(int n) {
        List<String> out = new ArrayList<>();
        for (int i = 1;i < n+1;i++) {
            if (i%3==0 && i%5==0) {
                out.add("FizzBuzz");
            }
            else if (i%3==0) {
                out.add("Fizz");
            }
            else if (i%5==0) {
                out.add("Buzz");
            }
            else {
                out.add(Integer.toString(i));
            }
        }
        return out;
    }

    public static void main(String[] args) {
        System.out.println(fizzBuzz(3));
        System.out.println(fizzBuzz(5));
        System.out.println(fizzBuzz(15));
    }
}
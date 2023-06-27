import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> array = Arrays.asList(5, 1, 22, 25, 6, -1, 8, 10);
        List<Integer> sequence = Arrays.asList(1, 6, -1, 10);
        System.out.println(Program.isValidSubsequence(array, sequence)); // true

        List<Integer> array2 = Arrays.asList(5, 1, 22, 25, -1, 6, 8, 10);
        List<Integer> sequence2 = Arrays.asList(1, 6, -1, 10);
        System.out.println(Program.isValidSubsequence(array2, sequence2)); // false

        List<Integer> array3 = Arrays.asList(5, 1, 22, 25, 6, -1, 8, 10);
        List<Integer> sequence3 = Arrays.asList(25);
        System.out.println(Program.isValidSubsequence(array3, sequence3)); // true

        List<Integer> array4 = Arrays.asList(1, 1, 1, 1, 1);
        List<Integer> sequence4 = Arrays.asList(1, 1, 1);
        System.out.println(Program.isValidSubsequence(array4, sequence4)); // true

        List<Integer> array5 = Arrays.asList(5, 1, 22, 25, 6, -1, 8, 10);
        List<Integer> sequence5 = Arrays.asList(5, 1, 22, 25, 6, -1, 8, 10, 12);
        System.out.println(Program.isValidSubsequence(array5, sequence5)); // false
    }
}

// my solution
class Program {
    public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {

        boolean out = false;
        int seqIndex = 0;
        for (Integer i : array) {
            if (sequence.contains(i) && i.equals(sequence.get(seqIndex))) {
                seqIndex++;
                out = true;
            }

            if (out && seqIndex == sequence.size()) {
                return true;
            } else if (!out && sequence.contains(i) && !i.equals(sequence.get(seqIndex))) {
                return false;
            }
        }

        return false;
    }
}
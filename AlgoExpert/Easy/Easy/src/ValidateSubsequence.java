


import java.util.Arrays;
import java.util.List;

public class ValidateSubsequence {
    public static void main(String[] args) {
        List<Integer> array = Arrays.asList(5, 1, 22, 25, 6, -1, 8, 10);
        List<Integer> sequence = Arrays.asList(1, 6, -1, 10);
        System.out.println(ValidateSubsequenceProgram1.isValidSubsequence(array, sequence)); // true

        List<Integer> array2 = Arrays.asList(5, 1, 22, 25, -1, 6, 8, 10);
        List<Integer> sequence2 = Arrays.asList(1, 6, -1, 10);
        System.out.println(ValidateSubsequenceProgram1.isValidSubsequence(array2, sequence2)); // false

        List<Integer> array3 = Arrays.asList(5, 1, 22, 25, 6, -1, 8, 10);
        List<Integer> sequence3 = Arrays.asList(25);
        System.out.println(ValidateSubsequenceProgram1.isValidSubsequence(array3, sequence3)); // true

        List<Integer> array4 = Arrays.asList(1, 1, 1, 1, 1);
        List<Integer> sequence4 = Arrays.asList(1, 1, 1);
        System.out.println(ValidateSubsequenceProgram1.isValidSubsequence(array4, sequence4)); // true

        List<Integer> array5 = Arrays.asList(5, 1, 22, 25, 6, -1, 8, 10);
        List<Integer> sequence5 = Arrays.asList(5, 1, 22, 25, 6, -1, 8, 10, 12);
        System.out.println(ValidateSubsequenceProgram1.isValidSubsequence(array5, sequence5)); // false
    }
}

// my solution - time complexity = O(n) | space complexity = O(1)
class ValidateSubsequenceProgram {
    public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {

        boolean isValid = false;
        int seqIndex = 0;
        for (Integer i : array) {
            if (sequence.contains(i) && i.equals(sequence.get(seqIndex))) {
                seqIndex++;
                isValid = true;
            }

            if (isValid && seqIndex == sequence.size()) {
                return true;
            } else if (!isValid && sequence.contains(i) && !i.equals(sequence.get(seqIndex))) {
                return false;
            }
        }

        return false;
    }
}


// solution 1 - O(n) time | O(1) space - where n is the length of the main array
class ValidateSubsequenceProgram1 {
    public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
        int arrIdx = 0;
        int seqIdx = 0;

        while (arrIdx < array.size() && seqIdx < sequence.size()) {
            if (array.get(arrIdx).equals(sequence.get(seqIdx))) {
                seqIdx++;
            }
            arrIdx++;
        }

        // System.out.println("seqIdx = " + seqIdx);
        // System.out.println("sequence.size() = " + sequence.size());
        return seqIdx == sequence.size();
    }
}

// solution 2 - O(n) time | O(1) space
class ValidateSubsequenceProgram2 {
    public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
        int seqIdx = 0;

        for (var value : array) {
            if (seqIdx == sequence.size()) {
                break;
            }

            if (sequence.get(seqIdx).equals(value)) {
                seqIdx++;
            }
        }

        return seqIdx == sequence.size();
    }
}
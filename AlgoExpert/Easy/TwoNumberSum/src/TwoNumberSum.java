import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class TwoNumberSum {

    public static void main(String[] args) {
        int[] out = TwoNumberSumProgram.twoNumberSum(new int[]{3, 5, -4, 8, 11, 1, -1, 6}, 10);
        System.out.println(Arrays.toString(out));
    }
}

// O(n^2) time  (two for loops) | 0(1) space (constant space)
class TwoNumberSumProgram {
    public static int[] twoNumberSum(int[] array, int targetSum) {
        System.out.println(array.length);

        for (int i = 0; i < array.length - 1; i++) {
            for (int j = 1; j < array.length - 1; j++) {
                if (array[i] + array[j] == targetSum && i != j) {
                    return new int[]{array[i], array[j]};
                }
            }
        }

        return new int[0];
    }
}


// O(n) time | O(n) space (for the set)
class TwoNumberSumProgram2 {

    public static int[] twoNumberSum(int[] array, int targetSum) {
        Set<Integer> nums = new HashSet<>(); // O(n) space (additional space for the set)
        for (int num : array) {
            int potentialMatch = targetSum - num;
            if (nums.contains(potentialMatch)) {
                return new int[]{potentialMatch, num};
            } else {
                nums.add(num);
            }
        }
        return new int[0];
    }
}

// O(nlog(n)) | O(1) space (constant space)
class TwoNumberSumProgram3 {
    public static int[] twoNumberSum(int[] array, int targetSum) {
        Arrays.sort(array); // O(nlog(n)) time
        System.out.println("Sorted: " + Arrays.toString(array));

        int left = 0;
        int right = array.length - 1;

        // O(n) time
        while (left < right) {
            int currentSum = array[left] + array[right];
            if (currentSum == targetSum) {
                return new int[]{array[left], array[right]};
            } else if (currentSum < targetSum) {
                left++;
            } else if (currentSum > targetSum) {
                right++;
            }
        }

        return new int[0];
    }
}

import java.util.Arrays;

public class NonConstructibleChange {

    public static void main(String[] args) {
        int[] coins = new int[] {5, 7, 1, 1, 2, 3, 22};
        System.out.println(NonConstructibleChangeProgram1.nonConstructibleChange(coins)); // 20
    }
}

// optimal space & time complexity = O(n log n) time | 0(1) space

// my solution without hints -- does not work
class NonConstructibleChangeProgram0 {
    public static int nonConstructibleChange(int[] coins) {
        System.out.println("coins lenght: " + coins.length);
        if (coins.length == 0) {
            return 1;
        }

        // starting with 1 we need to check if the sum of any 1 or more coins from the array equals 1
        // repeat check incrementing by 1 until a sum is not found

        // Arrays.sort(coins); // O(n log n)

        int increment = 1;
        int value = 1;
        while (true) {
            if (Arrays.asList(coins).contains(value)) {
                System.out.println("good");
            } else {
                return value;
            }
            value = value + increment;
            increment = increment + 1;
        }

        // return -1;
    }
}


// my solution with hints - time  = O(n log n) | space = O(1)
class NonConstructibleChangeProgram1 {
    public static int nonConstructibleChange(int[] coins) {

        int currentMaxChange = 1;

        if (coins.length == 0) {
            return currentMaxChange;
        }

        Arrays.sort(coins); // O(n log n)

        for (int i : coins) { // O(n)
            if (i > currentMaxChange) {
                return currentMaxChange;
            } else {
                currentMaxChange += i;
            }
        }

        return currentMaxChange;
    }
}


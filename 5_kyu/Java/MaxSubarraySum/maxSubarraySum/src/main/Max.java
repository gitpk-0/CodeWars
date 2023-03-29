package main;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * @author Patrick Kell
 */
public class Max {

    // Max.sequence(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4});
    // should be 6: {4, -1, 2, 1}


    public static int sequence(int[] arr) {
        if (Arrays.stream(arr).sum() < 0) {
            return 0;
        }

        ArrayList<Integer> sumArr = new ArrayList<>();
        ArrayList<Integer> indexTracker = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            sumArr.add(arr[i]);
            int first = sumArr.stream().mapToInt(n -> n).sum();
            int second = first + arr[i + 1];
            if (first < second) {
                sumArr.add(arr[i + 1]);
            }
        }
        return 10101010;
    }

    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println(sequence(arr));
    }
}
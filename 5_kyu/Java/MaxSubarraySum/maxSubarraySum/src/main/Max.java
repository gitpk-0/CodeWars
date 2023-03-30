package main;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * @author Patrick Kell
 */
public class Max {

    // Max.sequence(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4});
    // should be 6: {4, -1, 2, 1}

    // Max.sequence(new int[]{8,-29,0,-28,-20,9,15,-15,-8,8,-6,-14,-13,-1,14,21,-10,-29,3,7,-9,-23,-28,26,-28,12,-4,-1,27,18,10,21,27,-8,-5,-17,28,-21,-8,-10,1,-16,-18,-3,-11,24,-28,-7,28,-2,13});


    public static int sequence(int[] arr) {
        int maxSubarrSum = 0;
        int length = 1;
        int startIndex = 0;

        while (startIndex < arr.length) {
            ArrayList<Integer> arr2 = new ArrayList<>();

            while (length <= arr.length) {
                for (int i = startIndex; i < length; i++) {
                    arr2.add(arr[i]);

                    int currentSum = arr2.stream().mapToInt(j -> j).sum();

                    if (currentSum > maxSubarrSum) {
                        maxSubarrSum = currentSum;
                    }

                }
                length++;
                arr2 = new ArrayList<>();
            }
            length = 0;
            startIndex++;
        }

        return maxSubarrSum;
    }

    public static void main(String[] args) {
        int[] arr = {-3, -20, -6, -27, 25, -20, 29, -4, 21, 10, 7, -8, 5, 11, -1, 19, 20, -1, 2, -5, -10, 14, -19, -11, 17, -28, 24, -14, 19, -25, 27, -18, -15, -20, 14, 17, 28, -23, -23, 5, -11, -17, 12, 5, 10, -2, 24, 3, -13, -8, 23, -3, -24, 29, -2, -18, -28, -18, 19};
        System.out.println(sequence(arr));
    }
}
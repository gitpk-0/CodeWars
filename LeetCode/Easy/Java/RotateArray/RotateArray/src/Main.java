import java.util.Arrays;

public class Main {

    public static int[] rotate(int[] nums, int k) {
        if (nums.length <= 1) {
            // return;
        }
        if (nums.length == 2) {
            while (k > 0) {
                int temp = nums[0];
                nums[0] = nums[1];
                nums[1] = temp;
                k--;
            }
        }

        if (nums.length == 3) {
            while (k > 0) {
                int temp = nums[0];
                int temp2 = nums[1];
                nums[0] = nums[2];
                nums[1] = temp;
                nums[2] = temp2;
                k--;
            }
        }
        if (nums.length % 2 != 0) { // odd length array
            int kcopy = k;
            int midInd = nums.length - k - 1;
            int endInd = nums.length - 1;
            int strtInd = 0;
            int midVal, endVal, strtVal;

            while (kcopy > 0) {
                if (kcopy > 1) {
                    if (kcopy != k) {
                        midInd++;
                        endInd--;
                        strtInd++;
                    }
                    midVal = nums[midInd];
                    endVal = nums[endInd];
                    strtVal = nums[strtInd];

                    nums[endInd] = midVal;
                    nums[strtInd] = endVal;
                    nums[midInd] = strtVal;
                }
                // last iteration
                if (kcopy == 1) {
                    strtInd++;
                    endVal = nums[endInd];
                    strtVal = nums[strtInd];

                    nums[endInd] = strtVal;
                    nums[strtInd] = endVal;
                }
                kcopy--;
            }


            // reverse indexes 0 thru k
            for (int i = 0; i < k / 2; i++) {
                int temp = nums[i];
                nums[i] = nums[k - i - 1];
                nums[k - i - 1] = temp;
            }
        } else { // even length array
            // last index to k index
            // k index to last
            // last index - 1 to k - 1
            // k -1 index to last - 1

            int last = nums.length - 1;
            while (k > 0) {
                int temp = nums[last];
                nums[last] = nums[k - 1];
                nums[k - 1] = temp;
                k--;
                last--;
            }
        }

        return nums;
    }

    public static void main(String[] args) {
        // System.out.println(rotate(new int[]{1, 2, 3, 4, 5, 6, 7}, 3));
        System.out.println(Arrays.toString(rotate(new int[]{-1, -100, 3, 99}, 2)));
        System.out.println(Arrays.toString(rotate(new int[]{-1, -100, 3, 99}, 3)));
    }
}
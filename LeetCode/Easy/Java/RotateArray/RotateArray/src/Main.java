

public class Main {

    public static int[] rotate(int[] nums, int k) {
        // copy len - k - 1 (mid), paste to len -1 (end)
        // copy len - 1 (end), paste to index 0
        // copy index 0, paste to len - k - 1 (mid)
        int midInd = nums.length - k - 1;
        int endInd = nums.length - 1;
        int strtInd = 0;

        int midVal = nums[midInd];
        int endVal = nums[endInd];
        int strtVal = nums[strtInd];

        nums[endInd] = midVal;
        nums[strtInd] = endVal;
        nums[midInd] = strtVal;

        for (int i : nums) {
            System.out.print(i+",");
        }

        midInd = nums.length - k - 1;
        midInd++;
        endInd = nums.length - 1;
        endInd--;
        strtInd = 0;
        strtInd++;

        midVal = nums[midInd];
        endVal = nums[endInd];
        strtVal = nums[strtInd];

        nums[endInd] = midVal;
        nums[strtInd] = endVal;
        nums[midInd] = strtVal;


        System.out.println();
        for (int i : nums) {
            System.out.print(i+",");
        }

        midInd = nums.length - k - 1;
        // endInd = nums.length - 1; // stays the same on last iteration
        strtInd++;

        // last iteration swap strtInd and endInd
        endVal = nums[endInd];
        strtVal = nums[strtInd];

        nums[endInd] = strtVal;
        nums[strtInd] = endVal;

        System.out.println();
        for (int i : nums) {
            System.out.print(i+",");
        }

        return nums;
    }

    public static void main(String[] args) {
        System.out.println(rotate(new int[]{1, 2, 3, 4, 5, 6, 7}, 3));
    }
}
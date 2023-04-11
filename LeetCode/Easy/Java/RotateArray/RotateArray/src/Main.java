

public class Main {

    public static int[] rotate(int[] nums, int k) {
        while (k > 0) {
            // copy last index
            int last = nums[nums.length-1];

            // move each index to the next index
            for (int i = nums.length-1; i > 0; i--) {
                nums[i] = nums[i - 1];
            }
            // paste last index to index 0
            nums[0] = last;

            // repeat k times
            k--;
        }

        for (int i : nums) {
            System.out.print(i+",");
        }


        return nums;

        // // additional memory method
        // int[] newNums = new int[nums.length];
        // int kcopy = k;
        // for (int i = 0; i < nums.length; i++) {
        //     if (i < k) {
        //         newNums[i] = nums[nums.length - kcopy];
        //         kcopy--;
        //     } else {
        //         newNums[i] = nums[i - k];
        //     }
        // }
        //
        // for (int i : newNums) {
        //     System.out.print(i+",");
        // }
        // return newNums;
    }

    public static void main(String[] args) {
        System.out.println(rotate(new int[]{1, 2, 3, 4, 5, 6, 7}, 3));
    }
}

public class Main {

    public static int removeDuplicates(int[] nums) {
        int count_unique = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i - 1] != nums[i]) {
                nums[count_unique] = nums[i];
                count_unique++;
            }
        }
        return count_unique;
    }

    public static void main(String[] args) {
        // int[] nums = new int[]{0,0,1,1,1,2,2,3,3,4};
        int[] nums = new int[]{1, 1, 2};
        System.out.println(Main.removeDuplicates(nums));
    }
}
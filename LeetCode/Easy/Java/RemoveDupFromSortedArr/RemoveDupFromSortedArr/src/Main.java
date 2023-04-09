import java.util.ArrayList;

public class Main {

    public static int removeDuplicates(int[] nums) {
        ArrayList<Integer> numsA = new ArrayList<>();
        int count_unique = 0;
        for (int i = 0; i < nums.length; i++) {
            if (!(numsA.contains(nums[i]))) {
                numsA.add(nums[i]);

                if (nums[count_unique] != nums[i]) {
                    nums[count_unique] = nums[i];
                }
                count_unique++;
            }
        }
        return numsA.size();
    }

    public static void main(String[] args) {
        // int[] nums = new int[]{0,0,1,1,1,2,2,3,3,4};
        int[] nums = new int[]{1,1,2};
        System.out.println(Main.removeDuplicates(nums));
    }
}
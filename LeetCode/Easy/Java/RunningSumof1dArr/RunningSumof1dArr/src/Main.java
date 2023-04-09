public class Main {

    public static int[] runningSum(int[] nums) {
        int[] sumNums = new int[nums.length];
        int running_sum = 0;
        for (int i = 0; i < nums.length; i++) {
            running_sum = running_sum + nums[i];
            sumNums[i] = running_sum;
        }


        // for (int i : sumNums) {
        //     System.out.print(i + ",");
        // }
        // System.out.println();
        return sumNums;

    }
    public static void main(String[] args) {
        System.out.println(runningSum(new int[]{1,2,3,4})); // [1,3,6,10]
        System.out.println(runningSum(new int[]{1,1,1,1,1})); // [1,2,3,4,5]
        System.out.println(runningSum(new int[]{3,1,2,10,1})); // [3,4,6,16,17]
    }
}
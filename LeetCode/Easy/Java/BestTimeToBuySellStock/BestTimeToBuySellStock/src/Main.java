import java.util.ArrayList;

public class Main {
    public static int maxProfit(int[] prices) {
        ArrayList<Integer> profits = new ArrayList<>();
        int maxProfit = 0;
        for (int i = 0; i < prices.length; i++) {
            int current = prices[i];
        }


        return maxProfit;
    }
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[] {7,1,5,3,6,4})); // 7
        System.out.println(maxProfit(new int[] {1,2,3,4,5})); // 4
        System.out.println(maxProfit(new int[] {7,6,4,3,1})); // 0
    }
}
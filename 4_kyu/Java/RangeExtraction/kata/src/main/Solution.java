package main;

import java.util.ArrayList;

public class Solution {
    public static String rangeExtraction(int[] arr) {

        ArrayList<Integer> ranges = new ArrayList<>();
        ranges.add(arr[0]);

        StringBuilder result = new StringBuilder();

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] == arr[i - 1] + 1 || ranges.size() == 0) {
                ranges.add(arr[i]);
            } else {
                if (ranges.size() > 2) {
                    result.append(ranges.get(0)).append("-");
                    result.append(ranges.get(ranges.size() - 1)).append(",");
                    ranges.clear();
                    ranges.add(arr[i]);
                } else {
                    for (int num : ranges) {
                        result.append(num).append(",");
                    }
                    ranges.clear();
                    ranges.add(arr[i]);
                }
            }
        }

        if (ranges.size() > 0) {
            if (ranges.size() > 2) {
                result.append(ranges.get(0)).append("-");
                result.append(ranges.get(ranges.size() - 1)).append(",");
                ranges.clear();
            } else {
                for (int num : ranges) {
                    result.append(num).append(",");
                }
                ranges.clear();
            }
        }

        return result.toString().substring(0, result.length() -1);
    }

    public static void main(String[] args) {
        int[] arr = new int[]{-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20};


        System.out.println(rangeExtraction(arr));
    }
}
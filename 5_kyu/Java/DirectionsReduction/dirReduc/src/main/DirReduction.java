package main;

import java.util.ArrayList;

public class DirReduction {

    public static String[] dirReduc(String[] arr) {
        ArrayList<String> dirs = new ArrayList<>();
        ArrayList<String> output = new ArrayList<>();
        for (String dir : arr) {
            dirs.add(dir);
        }
        System.out.println("dirs: " + dirs.toString());

        int index = 0;
        for (String dir : dirs) {
            if (dir.equals("NORTH") && !dirs.get(index + 1).equals("SOUTH")) {
                output.add(dir);
            }
            if (dir.equals("SOUTH") && !dirs.get(index + 1).equals("NORTH")) {
                output.add(dir);
            }
            if (dir.equals("EAST") && !dirs.get(index + 1).equals("WEST")) {
                output.add(dir);
            }
            if (dir.equals("WEST") && !dirs.get(index + 1).equals("EAST")) {
                output.add(dir);
            }

        }
        System.out.println("out: " + output.toString());

        // if (index > 0) {
        //     if (dir.equals("NORTH") && dirs.get(index - 1).equals("SOUTH")) {
        //         dirs.remove(index);
        //         dirs.remove(index - 1);
        //     }
        //
        //     if (dir.equals("SOUTH") && dirs.get(index - 1).equals("NORTH")) {
        //         dirs.remove(index);
        //         dirs.remove(index - 1);
        //     }
        //
        //     if (dir.equals("EAST") && dirs.get(index - 1).equals("WEST")) {
        //         dirs.remove(index);
        //         dirs.remove(index - 1);
        //     }
        //
        //     if (dir.equals("WEST") && dirs.get(index - 1).equals("EAST")) {
        //         dirs.remove(index);
        //         dirs.remove(index - 1);
        //     }
        // }


        // HashMap<String, ArrayList<Integer>> dirs = new HashMap<>();
        // ArrayList<String> output = new ArrayList<>();
        // System.out.println(output.toString());
        // System.out.println(key.toString() + ": " + dirs.get(key).toString());
        return output.toArray(new String[]{});
        // return new String[]{};
    }


    public static void main(String[] args) {
        System.out.println(dirReduc(new String[]{"NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"})); // WEST

        System.out.println(dirReduc(new String[]{"EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"})); // EAST, NORTH
    }
}
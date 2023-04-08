package main;

import java.util.ArrayList;

public class DirReduction {

    public static String[] dirReduc(String[] arr) {
        ArrayList<String> dirs = new ArrayList<>();
        for (String dir : arr) {
            dirs.add(dir);
        }

        boolean done = false;
        while (!done) {
            int index = 0;
            if (dirs.size() == 0) done = true;
            for (String dir : dirs) {
                try {
                    if (dir.equals("NORTH") && dirs.get(index + 1).equals("SOUTH")) {
                        dirs.remove(index + 1);
                        dirs.remove(index);
                        break; // restart loop
                    }

                    if (dir.equals("SOUTH") && dirs.get(index + 1).equals("NORTH")) {
                        dirs.remove(index + 1);
                        dirs.remove(index);
                        break; // restart loop
                    }

                    if (dir.equals("EAST") && dirs.get(index + 1).equals("WEST")) {
                        dirs.remove(index + 1);
                        dirs.remove(index);
                        break; // restart loop
                    }

                    if (dir.equals("WEST") && dirs.get(index + 1).equals("EAST")) {
                        dirs.remove(index + 1);
                        dirs.remove(index);
                        break; // restart loop
                    }
                    index++;
                } catch (Exception e) {
                    done = true;
                }
            }
        }

        return dirs.toArray(new String[]{});
    }


    public static void main(String[] args) {
        System.out.println(dirReduc(new String[]{"NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"})); // WEST

        System.out.println(dirReduc(new String[]{"EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"})); // EAST, NORTH
        System.out.println(dirReduc(new String[]{"NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"})); // {}
    }
}
public class FindClosestValueInBST {

    public static void main(String[] args) {
        var root = new FindClosestValueInBSTProgram0.BST(10);
        root.left = new FindClosestValueInBSTProgram0.BST(5);
        root.left.left = new FindClosestValueInBSTProgram0.BST(2);
        root.left.left.left = new FindClosestValueInBSTProgram0.BST(1);
        root.left.right = new FindClosestValueInBSTProgram0.BST(5);
        root.right = new FindClosestValueInBSTProgram0.BST(15);
        root.right.left = new FindClosestValueInBSTProgram0.BST(13);
        root.right.left.right = new FindClosestValueInBSTProgram0.BST(14);
        root.right.right = new FindClosestValueInBSTProgram0.BST(22);

        var target = 13;
        System.out.println(FindClosestValueInBSTProgram0.findClosestValueInBst(root,target));
    }
}


class FindClosestValueInBSTProgram0 {

    public static int findClosestValueInBst(BST tree, int target) {

        return -1;
    }

    static class BST {
        public int value;
        public BST left;
        public BST right;

        public BST(int value) {
            this.value = value;
        }
    }
}
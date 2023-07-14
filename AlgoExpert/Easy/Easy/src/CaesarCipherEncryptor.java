import java.util.HashMap;

public class CaesarCipherEncryptor {
    public static void main(String[] args) {
        String str = "xyz";
        int key = 2;

        String str1 = "abc";
        int key1 = 52;

        System.out.println(CaesarCipherEncryptor0.caesarCypherEncryptor(str,key));
        System.out.println(CaesarCipherEncryptor0.caesarCypherEncryptor(str1,key1));
        System.out.println(CaesarCipherEncryptor0.caesarCypherEncryptor(str,800));
    }
}

class CaesarCipherEncryptor0 {
    public static String caesarCypherEncryptor(String str, int key) {
        StringBuilder out = new StringBuilder();

        for (int j = 0; j < str.length(); j++) {
            char newChar = (char) (str.charAt(j) + key);
            int newCharInt = newChar;

            while (newCharInt > 122) {
                newChar = (char) ((newCharInt - 122) + 96);
                newCharInt = newChar;
            }

            out.append(newChar);
        }

        return out.toString();
    }
}

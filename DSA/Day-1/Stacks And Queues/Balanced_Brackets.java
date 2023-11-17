import java.util.*;
public class Balanced_Brackets {
    public static boolean handelClosing(Stack<Character> stk, char corrspondEle){
        if(stk.size() == 0){
            return false;
        }else if(stk.peek() == corrspondEle){
            return false;
        }else{
            stk.pop();
            return true;
        }
    }
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String str = scn.nextLine();
        Stack<Character> stk = new Stack<>();
        for(int i = 0; i < str.length(); i++){
            char chr = str.charAt(i);
            if(chr == '(' || chr == '{' || chr == '['){
                stk.push(chr);
            }else if(chr == ')'){
                boolean val = handelClosing(stk, '(');
                if(val == false){
                    System.out.print(val);
                    return;
                }
            }else if(chr == '}'){
                boolean val = handelClosing(stk, '{');
                if(val == false){
                    System.out.print(val);
                    return;
                }
            }else if(chr == ']'){
                boolean val = handelClosing(stk, '[');
                System.out.print(val);
                return;
            }
        }
    }
}

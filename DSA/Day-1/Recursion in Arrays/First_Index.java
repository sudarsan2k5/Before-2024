import java.util.Scanner;
public class First_Index {
    public static int firstIdx(int[] arr, int idx, int num){
        if(idx == arr.length){
            return -1;
        }
        if(arr[idx] == num){
            return idx;
        }else{
            int firstIdxInSmallArray = firstIdx(arr, idx + 1, num);
            return firstIdxInSmallArray;
        }
    }
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < arr.length; i++){
            arr[i] = scn.nextInt();
        }
        int num = scn.nextInt();
        int result = firstIdx(arr, 0, num);
        System.out.println("First Idx: " + result);
    }
}

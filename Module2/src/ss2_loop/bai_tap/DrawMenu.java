package ss2_loop.bai_tap;

import java.util.Scanner;

public class DrawMenu {
    public static String drawRectangle(int width, int height){
        String result = "";
        for (int i = 0 ; i < height; i++){
            for (int j = 0 ; j < width ; j++){
                result += " * ";
            }
            result += "\n";
        }
        return result;
    }
    public static String drawTriangle (int height){
        String result = "";
        for (int i = 0; i < height; i++) {
            for (int j = 0; j <= i ; j++) {
                result += " * ";
            }
            result += "\n";
        }
        return result ;
    }
    public static String drawIsoscelesTriangle (int height){
        String result = "";
        for (int i = height; i >= 1; i--){
            for ( int j = 0 ; j < i ; j++){
                result += " * ";
            }
            result += "\n";
        }
        return result;
    }
    public static void main(String[] args) {
        loop: while (true){
            System.out.println("1.Print the rectangle");
            System.out.println("2.Print the square triangle");
            System.out.println("3.Print isosceles triangle");
            System.out.println("4.Exit");
            Scanner scanner = new Scanner(System.in);
            System.out.println("your choose: ");
            String choose = scanner.nextLine();
            switch (choose) {
                case "1": {
                    System.out.println("input your width: ");
                    int width = scanner.nextInt();
                    System.out.println("input your height: ");
                    int height = scanner.nextInt();
                    System.out.println(drawRectangle(width, height));
                    break;
                }
                case "2": {
                    System.out.println("input your height: ");
                    int height = scanner.nextInt();
                    System.out.println(drawTriangle(height));
                    break;
                }
                case "3": {
                    System.out.println("input your height");
                    int height = scanner.nextInt();
                    System.out.println(drawIsoscelesTriangle(height));
                    break;
                }
                default:
                    System.out.println("bye");
                    break loop;
            }
        }
    }
}

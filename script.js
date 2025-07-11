function showExample(example) {
  let code = "";

  if (example === "helloWorld") {
    code = `
      public class HelloWorld {
        public static void main(String[] args) {
          System.out.println("Hello, World!");
        }
      }
    `;
  } else if (example === "sumNumbers") {
    code = `
      import java.util.Scanner;

      public class SumNumbers {
        public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);
          System.out.print("Enter first number: ");
          int num1 = scanner.nextInt();
          System.out.print("Enter second number: ");
          int num2 = scanner.nextInt();
          int sum = num1 + num2;
          System.out.println("Sum: " + sum);
        }
      }
    `;
  } else if (example === "calculator") {
    code = `
      import java.util.Scanner;

      public class SimpleCalculator {
        public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);
          System.out.print("Enter first number: ");
          double num1 = scanner.nextDouble();
          System.out.print("Enter second number: ");
          double num2 = scanner.nextDouble();

          System.out.print("Choose operation (+, -, *, /): ");
          char operator = scanner.next().charAt(0);
          double result = 0;

          switch (operator) {
            case '+':
              result = num1 + num2;
              break;
            case '-':
              result = num1 - num2;
              break;
            case '*':
              result = num1 * num2;
              break;
            case '/':
              if (num2 != 0) {
                result = num1 / num2;
              } else {
                System.out.println("Error! Division by zero.");
                return;
              }
              break;
            default:
              System.out.println("Invalid operation!");
              return;
          }

          System.out.println("Result: " + result);
        }
      }
    `;
  }

  // Display the Java code
  document.querySelector("#code-block code").textContent = code;
}

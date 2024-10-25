/*
  WAP to calcuate the following formula
  1/2 * b * h;
  where b and h both are the integer type.
 
  Floating point data 20.5, -0.5
    a. float  ---> 4byte--->
    b. double --> 8byte
 
    20 ------> int
    20.5 ----> double
    20.5f

    Single precesion :--- . 6 digit
    Double precesion
 */
class TestMain{
    public static void main(String args[]){
      
      int b = 2,h = 3;
      
      float area = 0.5f * b * h;
      System.out.println("Area : "+area);
      
    }
}




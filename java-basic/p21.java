class TestMain{
    public static void main(String args[]){
        int a,b,c,d;
        a = 10;
        b = 20;
        c = 30;
        d = 40;
        boolean x = (a > b) && (++c < d) || (++a<d);
        /*
          x = (a > b) && (++c < d) || (++a<d)
                (10>20)
                  false && (++c<d)
                        false || (++a<d)
                        false || 11< 40
                        false || true
                           true
         */
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(x);
    }
}













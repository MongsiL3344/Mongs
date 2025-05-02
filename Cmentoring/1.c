#include<stdio.h>

int main(){

    int a, b;
    char ch;

    scanf("%d %d %c", &a, &b, &ch);

    switch (ch){
        case '+' :
        printf("%d + %d = %d\n",a, b, a+b);
        break;
        case '-' :
        printf("%d - %d = %d\n",a, b, a-b);
        break;
        case '*' :
        printf("%d * %d = %d\n",a, b, a*b);
        break;
        case '/' :
        printf("%d / %d = %d\n",a, b, a/b);
        break;
        default :
        printf("해당하는 연산자가 없습니다.\n");
        break;
    }
    return 0;
}


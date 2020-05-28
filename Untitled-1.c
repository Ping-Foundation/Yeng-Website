#include<stdio.h>
#include<stdlib.h>
int main (void) 
{
    int a,b,c;
    printf("Enter 3 numbers");
    scanf("%d%d%d",&a,&b,&c);
    if(a>b && a>c){
        printf("a %d is the largest number",a);
    }
    if(b>a && b>c)
    {
        printf("b %d is the largest number",b);
    }
    if(c>a && c>b){
        printf("c %d is the largest number",c);
    }
    return EXIT_SUCCESS;

} 
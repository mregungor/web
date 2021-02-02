# CSE 103 - COMPUTER PROGRAMMING 1

# Week 1

<strong>C Programming Syntax:</strong>
<div style="text-align: justify;">
What is a syntax? <br>
 Syntax is a set of rules, which consist sequence of characters (or symbols) that satisfies order and has a semantic meaning for that language. 
 <br>
What is a semantic meaning? <br>
 Semantics studies meanings of a sentence or structure in a language.
<br><br>
As programming languages are structured in a way where programmer can write and can be converted to the machine code. So all programming languages have a different way of conduct as programming methodologies remain largely similar.
<br><br>
C programming language has its own syntax that we all need to use to be able to use that language. Using this structure of coding language we can implement our own algorithms through that language.
</div>

<br><br>
Let's look at our first example to be able to understand C programming syntax.

## [ Example 1. Hello World Application ]
## <strong>Code:</strong>

> Code block:
```{r, attr.source='.numberLines'}  
#include <stdio.h>

int main()
{
    printf("Hello World");
    return 0;
}
```


<div style="text-align: justify;">
Different from languages that we use everyday, programming languages have generally more literal meaning than the figurative meaning (unless you do not define so). So when you are coding you need to explicitly write every step flawlessly and in a structured way so that your solution for a problem can work out. So before writing the code, you need to find a solution the problem you need to tackle with and create a suitable algorithm for it. Then you can implement your solution in a programming language you chose much more easily.
</div>

<br><br>
<div style="text-align: justify;">
So let's analyze our code line by line so that we can understand what our code does.

<br><br>
<code> #include < stdio.h > </code> 
<br> - This line is used to include standard input output library functions
so that you can use inbuilt functions in the C Compiler. File extension '.h' means this file is a header file to access standard library function which in our case standard input-output library. 

<br><br>
<code> int main(){ ...... } </code> 
<br> - This is our main function which our application starts from. So in C programming language our program starts from main function and process codes in a block defined between <code>{</code> and <code>}</code>.
We also define that when main function process completed we will return an integer value as it is defined in <code>int</code>. So program needs to return any kind of integer at the end of the program before termination. Therefore we use <code>return 0;</code> just before closing our block with <code>}</code>.
<br>You can also use <code> void main(){ .... you code here...} </code> in that case as we define we will return <code>void</code>  means we do not return any kind of value when program terminates, then you do not need to use return line.

<br><br>
<code> printf("Hello World"); </code> 
<br> - printf is a standard input output library function that helps us to print - create an output so that we can see the written content in the console. So to be able to see any kind of information in the console you can use <code>printf</code>  function to print data.

<br><br>
<code> return 0; </code> 
<br> - As we have mentioned before <code>return</code> returns value and terminates the function which in our case main function. So our program terminates as our function is main. 


<br><br>
<code> ; </code> 
<br> - You may notice in our main function code block all our statements are ended by <code> ; </code>. Statements and by <code> ; </code> unless they have special definition. So one of the earliest mistakes will contain errors because you forget  <code> ; </code>.


</div>



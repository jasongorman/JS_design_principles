# JS_design_principles
First pass at porting SOLID examples to functional JavaScript (for Node.js) with Jest tests

I've tried as much as possible to make the examples close to the Java and C# originals, though - since they're in a functional programming style, there are obvious differences.

But the SOLID principles mostly apply, when you put somee thought into it. See how you get on with the exercises.

# Single Responsibility

Refactor the code so that each module only has one reason to change.

# Open-Closed

Extend the video library functions so that videos have a rating (18, 15, 12, U) and customers can't borrow videos they're not old enough to watch WITHOUT EDITING ANY EXISTING SOURCE FILES

# Liskov Substitution

Extend the bank account functions so that people can debit up to an agreed overdraft limit. Refactor the test code so that you can check the new functions pass the existing tests ("contract test")

# Interface Segregation

Argably, this doesn't apply directly to FP. In spirit, though, it does. Read the example code carefully. Refactor so that each module is only dependent on functions it's using.

# Dependency Inversion

Refactor the response_writer module so that it doesn't depend directly on the three different serialiser implementations.


Assume in every exercise except for Open-Closed that you can refactor test code as well as src code if required. These are not APIs.


If you'd like a Software Design Principles training workshop where you work, visit www.codemanship.com for details

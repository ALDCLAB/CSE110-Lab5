# Lab 5 - CSE 110
Aaron Joshua Delacruz

[Expose](https://aldclab.github.io/CSE110-Lab5/expose.html)  
[Explore](https://aldclab.github.io/CSE110-Lab5/explore.html)

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not use unit tests to test the message feature of a messaging application. There are too much variables around the message feature such as typing, UI, and sending the message.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, unit testing is fine for testing the max message length feature. There is one condition needed, the condition being 80 characters, which can be tested by itself and most likely does not need all the multiple moving parts of a messaging feature. 
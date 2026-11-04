REPO LINK: https://github.com/diegos-png/Retro-Gaming-Console.git


Request explanation:
The request starts by creating a new XMLHttpRequest object. Then we initialize a new request with the .open() method. After that we use .send() to send the request to the server. Finally, we set the .onreadystatechange to an anonymous function that runs all our logic and updates proper values on our html page if the conditions are method

Summary explanation:
The summary part is quite simple. Because we want to keep track of the oldest and newest consoles in the data returned, we create two varaibles that both hold the first object in the array we got back. This is done so that we can use logical operators to compare and update our variables. After a quick for loop with some if statements, we cycle through the array we got back. We update our oldest and newest variables respectively along the way.
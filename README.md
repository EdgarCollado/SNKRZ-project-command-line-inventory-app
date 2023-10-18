# sneaker-retail-store-project-command-line-inventory-app

Command-line Inventory Application Project
Bringing together all you've learned so far, about JavaScript and building applications, build a Command-line Inventory Application. It will be an application where employees can keep track of the inventory of a store. Employees can create new items, update items, see a list of items, see details of one item and delete items. Your application should choose a particular resource or theme and be named appropriately.

Project Scoring
This project has two different parts on which you will be graded. Each part is weighted differently.

60% of the project is scored on completion.
30% of the project is scored through the mastery rubric.
10% of the project is scored through stretch goals.
In total, you must receive at least 70% to complete this project. For example, you could attain 50% of points through the completion requirements and 20% of points through the mastery rubric.

Completion
Set up
Create a GitHub repository.
Your GitHub repository should have a README.md file with setup instructions and a guide/cheatsheet on how to user your application (what commands are available, show some sample commands).
You have a .gitignore that is set up to ignore at least node_modules and .DS_Store and will ignore additional files, as needed.
You have a sample JSON file with some sample data. It should be an array of at least three objects. Each object should contain the following properties and at least one other property unique to your item:
name
priceInCents
inStock
You have a JSON file where your application will read from and write to.
You have an index.js file that is the entry point to your application
You have an updated package.json that has an appropriate name, and description. It also has your name as the author and it has a series of scripts that align with the functionality of your application. If your app requires additional packages, they are correctly set up as dependencies in this file as well.
Features
A user can create a new item.
A user can see a list of all the items.
A user can see the details of one item.
A user can delete an item.
A user can update an item.
When a user performs an action like creating or deleting an item, the data file is updated correctly. If the JSON is malformed, there is some logic to prevent writing to the file and thus corrupting the data file.
When a user creates an item a unique id is assigned to the new item.
Add a cart function where a user can add items to the shopping cart and see the total price and total number of each item
Add a cancel cart function that empties the shopping cart.
Mastery rubric
This section of the project is designed to measure your increasing skill at writing good code and following best practices.

To view components of the mastery rubric, view the appropriate assignment on Canvas.

Stretch goals
This section of the project measures your ability to go above and beyond in creating your project. To score points in this section, you should incorporate a feature, technology, or skill not explicitly required by the project instructions.

When you submit your pull request, make sure to include a description of any stretch goals you implemented. You may choose from the list below or come up with features or tasks that are more relevant to your specific implementation of the project.

Add a new command that lets the user filter by a item property like:
a true/false value (see all cookies that are vegan).
a greater than/less than value (see all shoes that cost more than $100).
Add unit testing with Jest.
Add the npm library chalk to make the use interaction clearer and more exciting.
Use readline to create an interactive menu for the user to interact with.
Project setup and overview
There are no tests for this project and you should not fork and clone this repository. Instead, create your own repository and start a new npm project.

Example
For example, you can choose to track the inventory of "cookies" at a bakery. In that case, the keys you store for each cookie could be "name", "priceInCents", "inStock", and "isVegan". Alternatively, you could track "shoes" at a shoe store. In addition to the required keys, you might also track shoeSize.

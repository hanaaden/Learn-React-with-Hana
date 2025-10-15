# Tools for fullStack

React is library for building use interface while Next Js is full framework build on top of react 

Next JS adds many features like 
SSR server side rendering 
API  and etc
That means simply 
React is UI building block 
Next js is full web framework
 
When to use 

You need to make Spa page use react 
Wanna do server side rendering use Next JS 

 use both when you need backend and frontend project 

Express is backend frameWork  for Node Js 
Uses to handle API fetching and CRUD operations some times authentication and middlewares

It works great in MongoDB and  PostgreSQL


PostgreSQL is relational database uses tables and rows  it supports JSON 

Why we use ? Because it is fast safe 

MangoDB is noSQL database 
Probably works well with express stores data flexibility for JSON
Use MERN projects 

PostgreSQL vs MongoDB 

PostgreSQL is structured means SQL 
Fixed 
Better for complex tasks 
MongoDB is unstructured means NoSQL
Flexible 
Better for large scale projects 


TS and JS 
Typescript is static means it is type checked while JS is dynamic 
Browser understands JS while TS needed to be compiled to JS 
TS will handle errors more than JS 
TS is more safer than JS Because it prevents bugs 


Now redis is a remote dictionary server 
It is memory stored data like cache and data 
It stored data into the RAM
Which makes it fast 

Let’s say you have a blog app:
	•	Every time a user views a post, your app fetches it from PostgreSQL (slow).
	•	You can store that post data in Redis for a few minutes.
	•	The next time it’s requested, it’s served instantly from Redis — no database query needed.


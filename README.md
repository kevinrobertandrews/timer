# Timer

A prototype app for figuring out how to track my time.


<pre>

  Timer App

  Associations --

  a Client has zero to many Task, and one Task has one Client 


  Domain Models --

  Client
  Task
  Money
  PayPeriod
  Date
  TimeSpent
  Description
  Title
  Income

  Clients
    - KevinRobertAndrews
      - Task 1
          - Date
          - TimeSpent
          - Description
          - Title
          - Income
        
    - LSWorks


  Client has 
    Tasks: Task[]
    Rate: A number for the rate payed by the Client in Hours

  Task has
    - Day: Day the task was done
    - TimeSpent: Time spent on the task
    - Description: A description of the task
    - Title: A title for the task
    - Income: An income value that multiplies the TimeSpent with

  Money is a domain model

  PayPeriod
    start: Date
    end: Date
    client: Client
    total: Money  

</pre>

v0.0.0

Feature

Write a task name and hit enter to start tracking. *in_progress*
  - After the users types a command and hits enter, do something with that command
    - When a user presses enter the input box clears


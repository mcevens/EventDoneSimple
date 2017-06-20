# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## events
| column name       | data type  | details  
|-------------------|------------|------------------------
| id                | integer    | not null, primary key
| organizer_id      | integer    | not null, foreign key (references users), indexed
| title             | string     | not null, indexed
| longitude         | decimal    |
| onlineEvent       | boolean    |
| latitude          | decimal    |
| precision         | decimal    |
| Adresseline1      | decimal    |
| datestart         | date       | not null, indexed
| timestart         | time       | not null
| description       | text       |
| image             | string     | not null
| ticket_price      | integer    | not null
| ticket_quantity   | integer    | not null

## tickets
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| event_id        | integer    | not null, foreign key (references events), indexed
| ticket_type     | string     |


## ticketOrder
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| ticket_id       | integer    | not null, foreign key (references events), indexed
| user_id         | string     |

## categories  

| id                   | integer       | not null, primary key
| name                 | string        | not null

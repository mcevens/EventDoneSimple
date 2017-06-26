# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
first_name      | string    |
last_name       | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## events
| column name       | data type  | details  
|-------------------|------------|------------------------
| id                | integer    | not null, primary key
| creater_id        | integer    | not null, foreign key (references users), indexed
| title             | string     | not null, indexed
| picture_url       | string     | not null
| longitude         | float      |
| latitude          | float      |
| onlineEvent       | boolean    |
| Adresseline1      | string     |
| datestart         | date       | not null, indexed
| timestart         | time       | not null
| description       | text       |


## tickets
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| event_id        | integer    | not null, foreign key (references events), indexed
| ticket_type     | string     |
| ticket_price    | integer    | not null
| ticket_quantity | integer    | not null

## ticketOrder
| column name     | data type  | details  
|-----------------|------------|------------------------
| id              | integer    | not null, primary key
| ticket_id       | integer    | not null, foreign key (references events), indexed
| user_id         | string     |

## ticket_type
| column name          | data type     | details
|----------------------|---------------|----------------------
| id                   | integer       | not null, primary key
| type                 | string        | not null

## categories  
| column name          | data type     | details
|----------------------|---------------|----------------------
| id                   | integer       | not null, primary key
| name                 | string        | not null
| parent_id            | integer       | not null

## eventBookMarks
| column name          | data type     | details
|----------------------|---------------|----------------------
| id                   | integer       | not null, primary key
| event_id             | integer       | not null
| user_id              | integer       | not null

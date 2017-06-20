# Schema Information

| column name          | datatype      | details

## users

| id                   | integer      | not null, primary key
| username             | string        | not null, indexed, unique
| email                | string        | not null, indexed, unique
| password_digest      | string        | not null, indexed, unique
| session_token        | string        | not null, indexed, unique

## events

| id                   | integger      | not null, primary key
| organizer_id         | integer       | not null
| title                | string        | not null
| location             | string        | not null
| date                 | date          | not null, indexed
| time                 | time          | not null
| description          | text          |


## tickets

| id                   | integer       | not null, primary key
| event_id             | integer       | not null
| user_id              | integer       | not null

## categories  

| id                   | integer       | not null, primary key
| name                 | string        | not null

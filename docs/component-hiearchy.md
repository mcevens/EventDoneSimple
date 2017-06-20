## Component Hiearchy

**AuthFormContainer**
- SignInForm
- CreateAccountForm

**HomeContainer**
- NavContainer
- CategoriesContainer
- EventIndexContainer

**NavBarContainer**
- NavBar
- AuthForm

**EventIndexContainer**
- EventForm

**TicketsContainer**
- Tickets

**CategoriesContainer**
- CategoryIndex

## Routes
Path => Component

"/sign-up"=> "AuthFormContainer"
"/sign-in"=> "AuthFormContainer"
"/" => "HomeContainer"
"/" => "NavBarContainer"
"/events" => "EventsIndexContainer"
"/events/new" => "NewEventFormContainer"
"/events/:id" => "EventDetailContainer"
"/events/:id/tickets" => "TicketsContainer"

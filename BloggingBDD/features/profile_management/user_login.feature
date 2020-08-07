Feature: Login into the system
    User wants to login into the system

    Scenario Outline: User wants to login into the system
        Given The login page appears 
        When All the credential of login is fulfilled as "<username>", "<password>" and clicked on signin button
        Then The dashboard appears with message box as "<successMessage>"

        Examples:
            | username      | password | successMessage                           |
            | hada          | 1212     | hada has been successfully logged in!    |
            | pranit200     | pranit   | Invalid username or password!!           |
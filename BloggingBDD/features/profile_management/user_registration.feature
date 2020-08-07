Feature: Register into the system

  User wants to get register for new account

  Scenario Outline: User wants to get register for new account
    Given The registration page with fields for user details appears
    When All the credential of registration is fulfilled as "<username>", "<email>", "<password>" and clicked on signup button
    Then The login page appears with message box as "<responseMessage>"

    Examples:
      | username      | email               | passsword | responseMessage                 |
      | hada          | hada@gmail.com      | 1212      | hada has been registered!       |
      | sau           | sau@gmail.com       | sau       | sau already exists!             |
     

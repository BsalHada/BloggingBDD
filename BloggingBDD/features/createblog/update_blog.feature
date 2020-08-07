Feature: Update blog

    User wants to edit blog

    Scenario Outline: User wants to edit blog
        Given The blog appears on dashboard as "<initialBlogTitle>", "<initialBlogContent>"
        When The initial blog is replaced with "<newBlogTitle>", "<newBlogContent>" and clicked on save button
        Then The updated blog is saved with "<responseMessage>"

        Examples:
            | initialBlogTitle | initialBlogContent | newBlogTitle | newBlogContent    | responseMessage             |
            | Test             | This is test       |              | This is new test  | Title seems to be missing   |
            | Test             | This is test       | Test         |                   | Content seems to be missing |
            | Test             | This is test       | Test One     | This is new test1 | Successfully edited         |

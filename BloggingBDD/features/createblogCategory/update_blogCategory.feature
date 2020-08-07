Feature: Update blog category

    User wants to edit blog category

    Scenario Outline: User wants to edit blog category
        Given The blog appears on dashboard as "<initialBlogCategoryTitle>"
        When The initial blog category is replaced with "<newBlogCategoryTitle>" and clicked on save button
        Then The updated blog category is saved with "<responseMessage>"

        Examples:
            | initialBlogCategoryTitle | newBlogCategoryTitle | responseMessage             |
            | Test                     |                      | Title seems to be missing   |
            | Test                     |  Test One            | Successfully edited         |

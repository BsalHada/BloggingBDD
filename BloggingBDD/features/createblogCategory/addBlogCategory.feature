Feature: Add new Blog Category
    User wants to add new blog category

    Scenario Outline: User wants to add new blog category
        Given User Blog Category page displays
        When The blog category page filled with "<blogCategoryTitle>" and clicked on save button
        Then The blog is saved with message as "<responseMessage>"

        Examples:
            | blogCategoryTitle    | responseMessage                            |
            |                      | Title seems to be missing                  |
            | Sport                | Blog Category has been successfully saved! |


Feature: Add new Blog
    User wants to add new blog

    Scenario Outline: User wants to add new blog
        Given User Blog page displays
        When The blog page filled with "<blogTitle>", "<blogContent>" and clicked on save button
        Then The blog is saved with message as "<responseMessage>"

        Examples:
            | blogTitle    | blogContent | responseMessage                   |
            |              | Agile Class | Title seems to be missing         |
            | SocialMedia  |             | Content seems to be missing       |
            | Sport        | Sport is .. | Blog has been successfully saved! |


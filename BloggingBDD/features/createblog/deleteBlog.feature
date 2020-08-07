Feature: Delete Blog
 
    User wants to delete blog
 
    Scenario: User wants to delete blog
    Given The blog on dashboard appears as "existedBlog"
    When Clicks on delete button to "delete"
    Then The blog from the dashboard is "deleted" with message as "Successfully blog deleted"
Feature: Delete Blog Category
 
    User wants to delete blog category
 
    Scenario: User wants to delete blog category
    Given The blog on dashboard appears as "existedBlogCategory"
    When Clicks on delete button to "delete"
    Then The blog from the dashboard is "deleted" with message as "Successfully blog deleted"
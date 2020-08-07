const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const createBlogCategoryModel = require("../rule_functions/rules");
const createBlogCategory= new createBlogCategoryModel();

/**
 *  @story = Add new Blog Category

 */
Given(
  "User Blog Category page displays",
  function () {
    // Only shows desc.
  }
);

When("The blog category page filled with {string},{string} and clicked on save button", function (
  blogCategoryTitle
) {
  const blogCategoryObject = {
    blogCategoryTitle: blogCategoryTitle
    
  };
  this.actualOutcome = createBlogCategory.addBlogCategory(blogCategoryObject);
});

Then("The blog category is saved with message as {string}", function (expectedOutcome) {
  assert.equal(this.actualOutcome, expectedOutcome);
  if (this.actualOutcome === expectedOutcome) {
    console.log(expectedOutcome);
  }
});

/**
 *  @story = Update Blog Category

 */

Given(
  "The blog category appears on dashboard as {string}, {string}",
  function (initialBlogCategoryTitle) {
    this.initialBlogCategory = initialBlogCategoryTitle;
  }
);

When("The initial blog category is replaced with {string}, {string} and clicked on save button", function (
  newBlogCategoryTitle
) {
  const updateBlogCategoryObject = {
    newBlogCategoryTitle: newBlogCategoryTitle,
    
  };
  this.actualOutcome = createBlogCategory.updateBlogCategory(updateBlogCategoryObject);
});

Then("The updated blog category is saved with {string}", function (expectedOutcome) {
  assert.equal(this.actualOutcome, expectedOutcome);
  if (this.actualOutcome === expectedOutcome) {
    console.log(expectedOutcome);
  }
});

/**
 *  @story = Delete Blog Category
  */
Given(
    "The blog category on dashboard appears as {string}",
    function (blogCategoryStatus) {
        this.deleteBlogCategory = blogCategoryStatus;
    }
);

When("Clicks on delete button to {string}", function (blogCategoryStatus
) {
    const deleteBlogCategoryObject = createBlog.deleteBlogCategory(blogCategoryStatus);
    this.actualStatus = deleteBlogCategoryObject.currentStatus;
    this.actualResponse = deleteBlogCategoryObject.reponseMessage;
});

Then("The blog category from the dashboard is {string} with message as {string}", function (expectedStatus,expectedMessage) {
    assert.equal(this.actualResponse, expectedMessage);
    assert.equal(this.actualStatus, expectedStatus);
    console.log(expectedMessage);
});


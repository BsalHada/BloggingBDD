const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const createBlogModel = require("../rule_functions/rules");
const createBlog = new createBlogModel();

/**
 *  @story = Add new Blog

 */
Given(
  "User Blog page displays",
  function () {
    // Only shows desc.
  }
);

When("The blog page filled with {string},{string} and clicked on save button", function (
  blogTitle, blogContent
) {
  const blogObject = {
    blogTitle: blogTitle,
    blogContent: blogContent
  };
  this.actualOutcome = createBlog.addBlog(blogObject);
});

Then("The blog is saved with message as {string}", function (expectedOutcome) {
  assert.equal(this.actualOutcome, expectedOutcome);
  if (this.actualOutcome === expectedOutcome) {
    console.log(expectedOutcome);
  }
});

/**
 *  @story = Update Blog

 */

Given(
  "The blog appears on dashboard as {string}, {string}",
  function (initialBlogTitle, initialBlogContent) {
    this.initialBlog = initialBlogTitle, initialBlogContent;
  }
);

When("The initial blog is replaced with {string}, {string} and clicked on save button", function (
  newBlogTitle, newBlogContent
) {
  const updateBlogObject = {
    newBlogTitle: newBlogTitle,
    newBlogContent: newBlogContent
  };
  this.actualOutcome = createBlog.updateBlog(updateBlogObject);
});

Then("The updated blog is saved with {string}", function (expectedOutcome) {
  assert.equal(this.actualOutcome, expectedOutcome);
  if (this.actualOutcome === expectedOutcome) {
    console.log(expectedOutcome);
  }
});

/**
 *  @story = Delete Blog
  */
Given(
    "The blog on dashboard appears as {string}",
    function (blogStatus) {
        this.deleteBlog = blogStatus;
    }
);

When("Clicks on delete button to {string}", function (blogStatus
) {
    const deleteBlogObject = createBlog.deleteBlog(blogStatus);
    this.actualStatus = deleteBlogObject.currentStatus;
    this.actualResponse = deleteBlogObject.reponseMessage;
});

Then("The blog from the dashboard is {string} with message as {string}", function (expectedStatus,expectedMessage) {
    assert.equal(this.actualResponse, expectedMessage);
    assert.equal(this.actualStatus, expectedStatus);
    console.log(expectedMessage);
});


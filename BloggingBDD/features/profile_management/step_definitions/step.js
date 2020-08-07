const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const profileUserMgmtModel = require("../rule_functions/rules");
const profileUserMgmt = new profileUserMgmtModel();

/**
 *  @Userstory = Register
 *  
 */
Given(
    "The registration page with fields for user details appears",
    function () {
        // Only shows desc.
    }
);

When("All the credential of registration is fulfilled as {string}, {string}, {string} and clicked on signup button", function (
    userName, email, password
) {
    const userObject = {
        userName: userName,
        email: email,
        password: password
    };
    this.actualOutcome = profileUserMgmt.registerUser(userObject);
});

Then("The login page appears with message box as {string}", function (expectedOutcome) {
    assert.equal(this.actualOutcome, expectedOutcome);
    if (this.actualOutcome === expectedOutcome) {
        console.log(expectedOutcome);
    }
});

/**
 *  @Userstory = Logout 
 *  
 */
Given(
    "The logout page appears with user status as {string}",
    function (userStatus) {
        this.logout = userStatus;
    }
);

When("Clicks on the logout button to change the status to {string}", function (userStatus
) {
    const logOutObject = profileUserMgmt.logout(userStatus);
    this.actualStatus = logOutObject.currentStatus;
    this.actualResponse = logOutObject.reponseMessage;
});

Then("The login page appears with message box as {string} and user status finally changes to {string}", function (expectedMessage,expectedStatus) {
    assert.equal(this.actualStatus, expectedStatus);
    assert.equal(this.actualResponse, expectedMessage);
    console.log (expectedMessage);
});




/**
 *  @Userstory = Login
 *  
 */
Given(
    "The login page appears",
    function () {
        // Only shows desc.
    }
);

When("All the credential of login is fulfilled as {string}, {string} and clicked on signin button", function (
    userName, password
) {
    const loginObject = {
        userName: userName,
        password: password
    };
    this.actualOutcome = profileUserMgmt.loginUser(loginObject);
});

Then("The dashboard appears with message box as {string}", function (expectedOutcome) {
    assert.equal(this.actualOutcome, expectedOutcome);
    if (this.actualOutcome === expectedOutcome) {
        console.log(expectedOutcome);
    }
});

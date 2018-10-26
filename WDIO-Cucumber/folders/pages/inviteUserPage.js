var selen = require('../utils/SelenMethods.js');

var inviteUserPage = function () {
    this.txtFirstName = 'input[id="firstName"]';
    this.txtLastName = 'input[id="lastName"]';
    this.ddlRole = 'select[id="selRoles"]';
    this.txtMobileNumber = 'input[id="phoneNumber"]';
    this.txtEmail = 'input[id="email"]';
    this.txtConfirmEmail = 'input[id="txtConfirmEmail"]';

    this.sendInviteButton = 'button[id="btnInvite"]';


    this.fillInviteUserDetails = async function(firstName, lastName, userRole, phoneNumber, emailId){
        selen.enterText(this.txtFirstName, firstName);
        selen.enterText(this.txtLastName, lastName);
        selen.selectByText(this.ddlRole, userRole);
        selen.enterText(this.txtMobileNumber, phoneNumber);
        selen.enterText(this.txtEmail, emailId);
        selen.enterText(this.txtConfirmEmail, emailId);
    };
};
module.exports = new inviteUserPage();

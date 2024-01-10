/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_iig_signin",
        editProfile: "B2C_1_iig_edit"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://indianitguy.b2clogin.com/indianitguy.onmicrosoft.com/B2C_1_iig_signin",
        },
        editProfile: {
            authority: "https://indianitguy.b2clogin.com/indianitguy.onmicrosoft.com/B2C_1_iig_edit"
        }
    },
    authorityDomain: "indianitguy.b2clogin.com"
}
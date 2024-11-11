# AWS

## Initial Setup

1. Create the "Management Account", and enable MFA for the root user.
2. [Require MFA for all users](https://docs.aws.amazon.com/singlesignon/latest/userguide/how-to-configure-mfa-device-enforcement.html)
3. [Enable AWS IAM Identity Center with AWS Organizations](https://docs.aws.amazon.com/singlesignon/latest/userguide/get-set-up-for-idc.html)
   - This uses the default identity source of AWS's Identity Center directory.
4. [Manually create an "Admin User" in a "Management Account Admins" group with the "AdministratorAccess" permission set](https://docs.aws.amazon.com/singlesignon/latest/userguide/quick-start-default-idc.html)
5. TODO: Set up AWS CLI for the "Admin User"

?. [Set up delegated administration account](https://docs.aws.amazon.com/singlesignon/latest/userguide/delegated-admin.html)

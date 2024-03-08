/**
 * Copyright 2023 Rent Smartly
 * Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

 * @category   Helper
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 */

/**
 * ANCHOR Success Message Object
 */
export const SUCCESS_MESSAGE = {
  ConfigurationListing: 'Configurations found',
  CommisionListing: 'Commisions found',
  CommisionDeleted: 'Commision Deleted successfully',
  CommisionCreated: 'Commision Created successfully',
  CommisionUpdated: 'Commision updated successfully',
  ConfigurationsDetailsFound: 'Configurations details found',
  MailCheck: 'Please check your mail.', //when mail send successfully.
  PasswordUpdate: 'Password updates successfully.', //when mail send successfully.
  AdminCreated: 'User created successfully.', //create user by admin
  UserCreated: 'Account created.', //create user for frontend
  AdminUpdated: 'User Updated Successfully', // admin update
  PolicyCreated: 'Policy Created Successfully', //cancellation policy create
  PolicyUpdated: 'Policy Updated Successfully', //cancellation policy update
  Step2: 'Step2 Data added successfully', //when step 2 data added successfully
  Step3: 'Step3 Data added successfully', //when step 3 data added successfully
  Step4: 'Step4 Data added successfully', //when step 4 data added successfully
  Step5: 'Step5 Data added successfully', //when step 5 data added successfully
  Step6: 'Step6 Data added successfully', //when step 6 data added successfully
  Step7: 'Step7 Data added successfully', //when step 7 data added successfully
  AdminUserDeleted: 'Admin user deleted successfully.', //when admin user deleted successfully
  PropertyCreated: 'Property Created successfully',
  Success: 'Success',
  ConfigurationDeleted: 'Configuration Deleted successfully',
  ConfigurationCreated: 'Configuration Created successfully',
  ConfigurationUpdated: 'Configuration updated successfully',
  UserTypeUpdated: 'User Type Updated Successfully.',
  UserUpdated: 'User updated successfully',
  UserDeleted: 'User deleted successfully',
  messageSent: 'The message has been sent.',
  statusChange: 'Status is Changed.',
  PaymentDone: 'Payment Done!',
  UserSupportingDocument: 'Documents Updated Successfully.',
  detail_filled: 'Request sent successfully!',
  PageCreated: 'Page created successfully ',
  LanguageCreate: 'Language Created successfully ',
  LanguageDeleted: 'Language Deleted successfully',
  PageUpdated: 'Page updated successfully ',
  PageDeleted: 'Page deleted successfully',
  ContactUs_message:
    'Thank you for contacting with us we will shortly connect with you',
  BookingConform: 'Your Information Has Been Sent!',
  PropertyToFavorite: 'Property Has Been Successfully Added To Favorites',
  PropertyFromFavorite: 'Property Has Been Successfully Removed From Favorites',
};

/**
 * ANCHOR Error Message Object
 */
export const ERROR_MESSAGE = {
  SiteConfigNotFound: 'Site configuration not found', //Site config not found,
  InvalidInputs: 'Invalid user inputs', //When invlid inputs,
  EmailNotFound: 'No account found with that email address.', //when email not found
  PasswordNotMatch: 'Password and confirm password does not match.', //when password not match
  NotLogin: 'Please first do login.', //when login token is expired or invalid
  InvalidEmail: 'Invalid email input. Please provide a valid email address.', //when entered invalid input
  InvalidId: 'Invalid Id Provided.', //when entered invalid encrypted id in URL
  WrongPassword: 'Wrong password Entered.', //when entered wrong password is entered
  IncorrectUrl: 'Incorrect URL', //when verify URL, entered invalid or modified URL
  ExpiredURL: 'URL expired', //when reopen verification type URL
  PasswordEncryption: 'Password Encryption Error', //when password encryption failed
  MailNotSend: 'Mail not send', //mail sending error
  TokenError: 'Token generation error', //token generating error
  WeakPassword:
    'password must be combination of numbers, uppercase, lowercase letters and ! @ # $ % ^ & * ( ) _ - And must have minimum 8 characters', //when entered weak password
  InvalidRole: 'role must be one of the following values: 0, 1', //when entered invalid role value
  AdminCreation: 'Admin not created', //admin creation error
  UserCreation: 'User not created', //user creation error
  UserUpdate: 'User not updated', //user creation error
  InternalServerError: 'Internal Server Error', //internal server error
  BadRequest: 'Bad Request', // bad request exception
  UserNameExist: 'User name is already exist', //user name exist error
  NotFoundException: 'Not Found', //when data or information not found
  BadUserInput: 'Bad User Input', //when entered wrong input values
  NotValidDate: 'Enter valid date', //enter date in incorrect format
  NotValidNumber: 'Please enter a valid number', //when number is not valid
  InvalidOTP: 'Entered Invalid OTP', //Entered Invalid OTP
  UpdateMobileNumber: 'Please Update Mobile Number', // when OTP send time mobile number isn't found
  PropertyNotFound: 'Property Not Found', //when property not found
  UnAuthorizedAccess:
    'Unauthorized access! Please login with admin credentials.', //when user try to access admin routes
  SomethingWentWrong: 'Something went wrong! Please try again',
  RecordNotFound: 'Record not found',
  CommisionNotFound: 'Commision not found',
  UserTypeUpdation: 'User type not Updated',
  IsNotLandLordPermission: 'Do not have Permission',
  UserNotFound: 'User not found',
  MessageIdError: 'Message ID not found!',
  EmailExist: 'Email Already Exist',
  CmsCreation: 'Cms Page not created', //cms page creation error
  LanguageExist: 'Language Already Exist',
  LanguageCreation: 'Language not Created', //Language creation error
  InvalidLanguageData: 'Please provide data in all the available languages',
  Pagestatus:
    'Page with same name is already Active please again after deactivating',
  LanguageNotDelete: 'English can not deleted',
  PageNotFound: 'Page with given id not found',
  ImageFormat:
    'Invalid file format for supportingDocument. Only JPG, JPEG, and PNG files are allowed.',
  BookingNotFound: 'No Booking Found with this ID',
  BookingFound: 'Booking Found with this ID',
  NoMessage: 'No Messages Found With this Booking ID',
  DataNotFound: 'No Data Found.',
  MobileNumberExist: 'Mobile number is already exist!',
  SameAccountError: 'You can not book your own Apartment',
  InvalidAddress:
    'The entered address is not found or invalid please enter the correct address.',
  EmptyMessageError: 'Please enter message',
  DeletedUser: 'Deleted user',
};

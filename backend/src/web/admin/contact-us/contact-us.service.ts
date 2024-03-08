import { Injectable } from '@nestjs/common';
import { CreateContactUsInput } from '../../../dto/contact-us.input';
import { SendMailInterface } from '../../../common/types';
import { ContactUsEntity } from '../../../shared/entity/contact-us.entity';
import { MailService } from '../../../shared/module/mail/mail.service';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../../common/constants';
import { GraphQLError } from 'graphql';

@Injectable()
export class ContactUsService {
  constructor(private mailService: MailService) {}

  async create(createContactUsInput: CreateContactUsInput) {
    try {
      //create mail sending data
      const mailData: SendMailInterface = {
        subject: 'Contact_us',
        template: 'contact-us',
        context: {
          info: 'User-Inquiry',
          name: createContactUsInput.name,
          email: createContactUsInput.email,
          mobile: createContactUsInput.mobile,
          message: createContactUsInput.message,
        },
      };
      const createUserContact = new ContactUsEntity();
      createUserContact.name = createContactUsInput.name;
      createUserContact.email = createContactUsInput.email;
      createUserContact.mobile = createContactUsInput.mobile;
      createUserContact.message = createContactUsInput.message;
      await ContactUsEntity.save(createUserContact);
      //send mail
      await this.mailService.sendUsersContact_Us(mailData);

      //return success message
      return SUCCESS_MESSAGE.ContactUs_message;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.MailNotSend, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async findAll() {
    try {
      return await ContactUsEntity.find({
        order: { id: 'ASC' },
      });
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }
}

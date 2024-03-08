/**
 *  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

 * @category   Helper
 * @package    Mail
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { SendMailInterface } from '../../../common/types';
import { AdminEntity } from '../../entity/admin.entity';
import { UserEntity } from '../../entity/user.entity';
import { SiteConfigEntity } from '../../entity/siteSettings.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  /**
   * ANCHOR sendUserConfirmation
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose sending mail
   * @param mailData mail sending information
   * @param user user to send mail
   */
  async sendUserConfirmation(mailData: SendMailInterface, user: AdminEntity) {
    await this.mailerService.sendMail({
      to: user.email,
      from: .MAIL_USERNAME,
      subject: mailData.subject,
      template: join(__dirname, `../../email-templates/${mailData.template}`), // `.hbs` extension is appended automatically
      context: { data: mailData.context },
    });
  }

  async sendUsersConfirmation(mailData: SendMailInterface, user: UserEntity) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: mailData.subject,
      from: .SENDGRID_USERNAME,
      template: join(__dirname, `../../email-templates/${mailData.template}`), // `.hbs` extension is appended automatically
      context: { data: mailData.context },
    });
  }

  async sendUsersContact_Us(mailData: SendMailInterface) {
    const adminEmail = await SiteConfigEntity.findOneBy({ id: 1 });
    await this.mailerService.sendMail({
      to: adminEmail.email,
      from: .MAIL_USERNAME,
      subject: mailData.subject,
      template: join(__dirname, `../../email-templates/${mailData.template}`), // `.hbs` extension is appended automatically
      context: { data: mailData.context },
    });
  }
}

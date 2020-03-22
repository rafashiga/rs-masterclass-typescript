interface IMailTo {
  name: string;
  email: string;
}

interface IMailMesage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMesage;
}

interface IEmailService {
  sendMail(resquest: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using TMSWebAPI.Interfaces;
using TMSWebAPI.ViewModels.Contacts;

namespace TMSWebAPI.Services
{
    public class EmailService : IEmailService
    {
        public async Task SendEmailAsync(ContactViewModel contact)
        {
            try
            {
                SmtpClient smtpClient = new SmtpClient();
                NetworkCredential basicCredential = new NetworkCredential("ushtrimeemail@gmail.com","Ushtrime1234");
                MailMessage mailMessage = new MailMessage();
                MailAddress fromAddress = new MailAddress("ushtrimeemail@gmail.com", contact.FirstName + " " + contact.LastName);
                MailAddress replyAddress = new MailAddress(contact.Email, contact.FirstName + " " + contact.LastName);
                smtpClient.Host = "smtp.gmail.com";
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = basicCredential;
                smtpClient.EnableSsl = true;
                smtpClient.Port = 587;
                mailMessage.From = fromAddress;
                mailMessage.ReplyTo = replyAddress;
                mailMessage.Subject = contact.Subject;
                mailMessage.IsBodyHtml = true;
                mailMessage.Body = "<h1>Subject:</h1> " + contact.Subject + "<h3>Email:</h3> " + contact.Email + "<br/> <h3>Message:</h3> " + contact.Message;
                mailMessage.To.Add("ushtrimeemail@gmail.com");
                await smtpClient.SendMailAsync(mailMessage);
            }
            catch (Exception e)
            {

                throw e;
            }
        }
    }
}

﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TMSWebAPI.Interfaces;
using TMSWebAPI.ViewModels.Contacts;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IEmailService _email;
        public ContactsController(IEmailService email)
        {
            _email = email;
        }

        [HttpPost]
        public async Task<ActionResult<ContactViewModel>> PostMessage(ContactViewModel contact)
        {
            ContactViewModel email = new ContactViewModel();
            email.FirstName = contact.FirstName;
            email.LastName = contact.LastName;
            email.Email = contact.Email;
            email.Subject = contact.Subject;
            email.Message = contact.Message;

            await _email.SendEmailAsync(email);
            return Ok();
        }
    }
}
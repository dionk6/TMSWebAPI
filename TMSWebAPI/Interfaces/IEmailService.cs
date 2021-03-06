using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TMSWebAPI.ViewModels.Contacts;

namespace TMSWebAPI.Interfaces
{
    public interface IEmailService
    {
        Task<bool> SendEmailAsync(ContactViewModel contact);
        Task<bool> SendConfirmedEmail(ContactViewModel contact);
    }
}

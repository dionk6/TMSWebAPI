using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TMSWebAPI.ViewModels.Account
{
    public class SignInViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string PhoneNumber { get; set; }
    }
}

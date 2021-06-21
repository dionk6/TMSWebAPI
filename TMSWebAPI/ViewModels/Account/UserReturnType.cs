using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TMSWebAPI.ViewModels.Account
{
    public class UserReturnType
    {
        public bool IsCorrect { get; set; }
        public string Message { get; set; }
        public string roleId { get; set; }
    }
}

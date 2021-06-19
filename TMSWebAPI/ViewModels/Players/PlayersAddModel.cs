using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TMSWebAPI.ViewModels.Players
{
    public class PlayersAddModel
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Age { get; set; }
        public string PlayerNo { get; set; }
        public string Position { get; set; }
        public string Bio { get; set; }
        public IFormFile Photo { get; set; }
        public string Kit { get; set; }
        public string Price { get; set; }
        public string TeamId { get; set; }
    }
}

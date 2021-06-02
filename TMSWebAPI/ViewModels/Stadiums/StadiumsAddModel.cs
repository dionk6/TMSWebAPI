using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TMSWebAPI.ViewModels.Stadiums
{
    public class StadiumsAddModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Capacity { get; set; }
        public IFormFile Image { get; set; }
        public string Rank { get; set; }
    }
}

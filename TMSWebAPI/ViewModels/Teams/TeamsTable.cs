using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TMSWebAPI.ViewModels.Teams
{
    public class TeamsTable
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Logo { get; set; }
        public string FoundedYear { get; set; }
        public string Manager { get; set; }
        public string Description { get; set; }
        public string Trophies { get; set; }
        public string Owner { get; set; }
        public string Budget { get; set; }
        public string League { get; set; }
        public string Stadium { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TMSWebAPI.Models;
using TMSWebAPI.ViewModels.Players;

namespace TMSWebAPI.ViewModels.Teams
{
    public class TeamsViewModel
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
        public string LeagueId { get; set; }
        public string StadiumId { get; set; }
        public Stadium Stadium { get; set; }
        public List<PlayersTable> Players { get; set; }
    }
}

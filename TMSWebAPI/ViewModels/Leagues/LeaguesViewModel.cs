using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TMSWebAPI.ViewModels.Teams;

namespace TMSWebAPI.ViewModels.Leagues
{
    public class LeaguesViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string FoundedYear { get; set; }
        public string MaxNrTeam { get; set; }
        public string Description { get; set; }
        public string TvPartner { get; set; }
        public string Logo { get; set; }
        public string CurrentChampion { get; set; }
        public List<TeamsTable> Teams { get; set; }
    }
}

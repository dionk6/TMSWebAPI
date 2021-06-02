using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TMSWebAPI.ViewModels.Leagues
{
    public class LeaguesAddModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string FoundedYear { get; set; }
        public string MaxNrTeam { get; set; }
        public string TvPartner { get; set; }
        public IFormFile Logo { get; set; }
        public string CurrentChampion { get; set; }
    }
}

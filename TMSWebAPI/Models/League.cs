using System;
using System.Collections.Generic;

#nullable disable

namespace TMSWebAPI.Models
{
    public partial class League
    {
        public League()
        {
            Teams = new HashSet<Team>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public int FoundedYear { get; set; }
        public int MaxNrTeam { get; set; }
        public string TvPartner { get; set; }
        public string Logo { get; set; }
        public string CurrentChampion { get; set; }

        public virtual ICollection<Team> Teams { get; set; }
    }
}

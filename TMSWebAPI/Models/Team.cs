using System;
using System.Collections.Generic;

#nullable disable

namespace TMSWebAPI.Models
{
    public partial class Team
    {
        public Team()
        {
            Players = new HashSet<Player>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Logo { get; set; }
        public int FoundedYear { get; set; }
        public string Manager { get; set; }
        public string Description { get; set; }
        public int Trophies { get; set; }
        public string Owner { get; set; }
        public string Budget { get; set; }
        public bool? IsDeleted { get; set; }
        public int LeagueId { get; set; }
        public int StadiumId { get; set; }

        public virtual League League { get; set; }
        public virtual Stadium Stadium { get; set; }
        public virtual ICollection<Player> Players { get; set; }
    }
}

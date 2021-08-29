using System;
using System.Collections.Generic;

#nullable disable

namespace TMSWebAPI.Models
{
    public partial class Stadium
    {
        public Stadium()
        {
            Teams = new HashSet<Team>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Capacity { get; set; }
        public bool? IsDeleted { get; set; }
        public string Image { get; set; }
        public int Rank { get; set; }

        public virtual ICollection<Team> Teams { get; set; }
    }
}

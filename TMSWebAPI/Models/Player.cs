using System;
using System.Collections.Generic;

#nullable disable

namespace TMSWebAPI.Models
{
    public partial class Player
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string PlayerNo { get; set; }
        public string Photo { get; set; }
        public string Position { get; set; }
        public string Bio { get; set; }
        public string Kit { get; set; }
        public decimal Price { get; set; }
        public bool? IsDeleted { get; set; }
        public int TeamId { get; set; }

        public virtual Team Team { get; set; }
    }
}

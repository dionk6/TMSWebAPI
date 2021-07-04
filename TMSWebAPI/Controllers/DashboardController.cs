using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TMSWebAPI.Models;
using TMSWebAPI.ViewModels.Dashboard;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {

        private readonly TMSContext _context;
        private readonly IWebHostEnvironment _env;

        public DashboardController(TMSContext context,
                                   IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpGet("GetCounters")]
        public CountersViewModel GetCounters()
        {
            var model = new CountersViewModel();
            model.PlayersCounter = _context.Players.Where(t => t.IsDeleted == false).Count();
            model.LeaguesCounter = _context.Leagues.Where(t => t.IsDeleted == false).Count();
            model.TeamsCounter = _context.Teams.Where(t => t.IsDeleted == false).Count();
            return model;
        }
    }
}

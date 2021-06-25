using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TMSWebAPI.Models;
using TMSWebAPI.ViewModels;
using TMSWebAPI.ViewModels.Teams;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly TMSContext _context;
        private readonly IWebHostEnvironment _env;

        public TeamsController(TMSContext context,
                                IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // GET: api/Teams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Team>>> GetPlayers()
        {
            return await _context.Teams.Where(t => t.IsDeleted == false).ToListAsync();
        }

        [HttpGet("TeamsTable")]
        public IEnumerable<TeamsTable> TeamsTable()
        {
            IEnumerable<TeamsTable> model = _context.Teams.Where(t => t.IsDeleted == false).Include(t => t.League).Include(t => t.Stadium).Select(t => new TeamsTable
            {
                Id = t.Id.ToString(),
                Name = t.Name,
                City = t.City,
                Logo = t.Logo,
                FoundedYear = t.FoundedYear.ToString(),
                Manager = t.Manager,
                Trophies = t.Trophies.ToString(),
                Owner = t.Owner,
                Budget = t.Budget,
                League = t.League.Name,
                Stadium = t.Stadium.Name,
                Description = t.Description
            });
            return model;
        }

        // GET: api/Teams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Team>> GetTeam(int id)
        {
            var team = await _context.Teams.FindAsync(id);

            if (team == null)
            {
                return NotFound();
            }

            return team;
        }

        // PUT: api/Teams/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut]
        public async Task<IActionResult> PutTeam([FromForm] TeamsAddModel model)
        {
            Team team = await _context.Teams.FindAsync(int.Parse(model.Id));
            team.Name = model.Name;
            team.City = model.City;
            team.FoundedYear = int.Parse(model.FoundedYear);
            team.Manager = model.Manager;
            team.Trophies = int.Parse(model.Trophies);
            team.Owner = model.Owner;
            team.Budget = model.Budget;
            if (int.Parse(model.LeagueId) != 0)
            {
                team.LeagueId = int.Parse(model.LeagueId);
            }
            if (int.Parse(model.StadiumId) != 0)
            {
                team.StadiumId = int.Parse(model.StadiumId);
            }
            team.Description = model.Description;
            if (model.Logo != null)
            {
                var filePath = Path.Combine(_env.WebRootPath, "Upload", "Teams"); ;

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }
                var fullPath = Path.Combine(_env.WebRootPath, "Upload", "Teams", model.Logo.FileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    model.Logo.CopyTo(stream);
                }

                team.Logo = "https://localhost:5001/Upload/Teams/" + model.Logo.FileName;
            }

            if (!TeamExists(team.Id))
            {
                return NotFound();
            }
            else
            {
                _context.Teams.Update(team);
                await _context.SaveChangesAsync();
            }
            return Ok();
        }

        [HttpGet("SelectTeams")]
        public IEnumerable<SelectViewModel> SelectTeams()
        {
            var model = _context.Teams.Select(t => new SelectViewModel
            {
                value = t.Id.ToString(),
                label = t.Name
            });
            return model;
        }

        // POST: api/Teams
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Team>> PostTeam([FromForm] TeamsAddModel model)
        {
            Team team = new Team();
            team.Name = model.Name;
            team.City = model.City;
            team.FoundedYear = int.Parse(model.FoundedYear);
            team.Manager = model.Manager;
            team.Trophies = int.Parse(model.Trophies);
            team.Owner = model.Owner;
            team.Budget = model.Budget;
            if (int.Parse(model.LeagueId) != 0)
            {
                team.LeagueId = int.Parse(model.LeagueId);
            }
            else
            {
                team.LeagueId = _context.Leagues.Where(t => t.IsDeleted == false).FirstOrDefault().Id;
            }
            if (int.Parse(model.StadiumId) != 0)
            {
                team.StadiumId = int.Parse(model.StadiumId);
            }
            else
            {
                team.StadiumId = _context.Stadiums.Where(t => t.IsDeleted == false).FirstOrDefault().Id;
            }
            team.Description = model.Description;
            team.IsDeleted = false;
            if (model.Logo != null)
            {
                var filePath = Path.Combine(_env.WebRootPath, "Upload", "Teams"); ;

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }
                var fullPath = Path.Combine(_env.WebRootPath, "Upload", "Teams", model.Logo.FileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    model.Logo.CopyTo(stream);
                }

                team.Logo = "https://localhost:5001/Upload/Leagues/" + model.Logo.FileName;
            }
            else
            {
                team.Logo = "Empty";
            }

            _context.Teams.Add(team);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/Teams/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Team>> DeleteTeam(string id)
        {
            var team = await _context.Teams.FindAsync(int.Parse(id));
            if (team == null)
            {
                return NotFound();
            }

            team.IsDeleted = true;
            _context.Teams.Update(team);
            await _context.SaveChangesAsync();

            return team;
        }

        private bool TeamExists(int id)
        {
            return _context.Teams.Any(e => e.Id == id);
        }
    }
}

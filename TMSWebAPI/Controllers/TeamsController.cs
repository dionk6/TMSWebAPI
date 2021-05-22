using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TMSWebAPI.Models;
using TMSWebAPI.ViewModels.Teams;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly TMSContext _context;

        public TeamsController(TMSContext context)
        {
            _context = context;
        }

        // GET: api/Teams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Team>>> GetPlayers()
        {
            return await _context.Teams.ToListAsync();
        }

        [HttpGet("TeamsTable")]
        public IEnumerable<TeamsTable> TeamsTable()
        {
            IEnumerable<TeamsTable> model = _context.Teams.Include(t => t.League).Include(t => t.Stadium).Select(t => new TeamsTable
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
                Stadium = t.Stadium.Name
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
        public async Task<IActionResult> PutTeam(TeamsViewModel model)
        {
            Team team = new Team();
            team.Id = int.Parse(model.Id);
            team.Name = model.Name;
            team.City = model.City;
            team.Logo = model.Logo;
            team.FoundedYear = int.Parse(model.FoundedYear);
            team.Manager = model.Manager;
            team.Trophies = int.Parse(model.Trophies);
            team.Owner = model.Owner;
            team.Budget = model.Budget;
            team.LeagueId = int.Parse(model.LeagueId);
            team.StadiumId = int.Parse(model.StadiumId);

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

        // POST: api/Teams
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Team>> PostTeam(TeamsViewModel model)
        {
            Team team = new Team();
            team.Name = model.Name;
            team.City = model.City;
            team.Logo = model.Logo;
            team.FoundedYear = int.Parse(model.FoundedYear);
            team.Manager = model.Manager;
            team.Trophies = int.Parse(model.Trophies);
            team.Owner = model.Owner;
            team.Budget = model.Budget;
            team.LeagueId = int.Parse(model.LeagueId);
            team.StadiumId = int.Parse(model.StadiumId);

            _context.Teams.Add(team);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/Teams/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Team>> DeleteTeam(int id)
        {
            var team = await _context.Teams.FindAsync(id);
            if (team == null)
            {
                return NotFound();
            }

            _context.Teams.Remove(team);
            await _context.SaveChangesAsync();

            return team;
        }

        private bool TeamExists(int id)
        {
            return _context.Teams.Any(e => e.Id == id);
        }
    }
}

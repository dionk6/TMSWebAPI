using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TMSWebAPI.Models;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaguesController : ControllerBase
    {
        private readonly TMSContext _context;

        public LeaguesController(TMSContext context)
        {
            _context = context;
        }

        // GET: api/Leagues
        [HttpGet]
        public async Task<ActionResult<IEnumerable<League>>> GetLeagues()
        {
            return await _context.Leagues.ToListAsync();
        }

        [HttpGet("GetAllLeagues")]
        public async Task<ActionResult<IEnumerable<League>>> GetAllLeagues()
        {
            return await _context.Leagues.ToListAsync();
        }

        [HttpGet("GetLeague")]
        public async Task<ActionResult<League>> GetLeague()
        {
            var league = _context.Leagues.First();
            return league;
        }

        // GET: api/Leagues/5
        [HttpGet("{id}")]
        public async Task<ActionResult<League>> GetLeague(int id)
        {
            var league = await _context.Leagues.FindAsync(id);

            if (league == null)
            {
                return NotFound();
            }

            return league;
        }

        // PUT: api/Leagues/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeague(int id, League league)
        {
            league.Id = id;

            try
            {
                _context.Update(league);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeagueExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Leagues
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<League>> PostLeague(League league)
        {
            _context.Leagues.Add(league);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeague", new { id = league.Id }, league);
        }

        // DELETE: api/Leagues/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<League>> DeleteLeague(int id)
        {
            var league = await _context.Leagues.FindAsync(id);
            if (league == null)
            {
                return NotFound();
            }

            _context.Leagues.Remove(league);
            await _context.SaveChangesAsync();

            return league;
        }

        private bool LeagueExists(int id)
        {
            return _context.Leagues.Any(e => e.Id == id);
        }
    }
}

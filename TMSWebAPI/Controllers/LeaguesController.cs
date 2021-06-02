using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TMSWebAPI.Models;
using TMSWebAPI.ViewModels;
using TMSWebAPI.ViewModels.Leagues;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaguesController : ControllerBase
    {
        private readonly TMSContext _context;
        private readonly IWebHostEnvironment _env;

        public LeaguesController(TMSContext context,
                                 IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // GET: api/Leagues
        [HttpGet]
        public async Task<ActionResult<IEnumerable<League>>> GetLeagues()
        {
            return await _context.Leagues.ToListAsync();
        }

        [HttpGet("LeaguesTable")]
        public IEnumerable<LeaguesViewModel> LeaguesTable()
        {
            var model = _context.Leagues.Select(t => new LeaguesViewModel
            {
                Id = t.Id.ToString(),
                Name = t.Name,
                Country = t.Country,
                FoundedYear = t.FoundedYear.ToString(),
                MaxNrTeam = t.MaxNrTeam.ToString(),
                TvPartner = t.TvPartner,
                Logo = t.Logo,
                CurrentChampion = t.CurrentChampion
            });
            return model;
        }

        [HttpGet("SelectLeague")]
        public IEnumerable<SelectViewModel> SelectLeague()
        {
            var model = _context.Leagues.Select(t => new SelectViewModel
            {
                value = t.Id.ToString(),
                label = t.Name
            });
            return model;
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
        [HttpPut]
        public async Task<IActionResult> PutLeague([FromForm] LeaguesAddModel model)
        {
            League league = new League();
            league.Id = int.Parse(model.Id);
            league.Name = model.Name;
            league.Country = model.Country;
            league.FoundedYear = int.Parse(model.FoundedYear);
            league.MaxNrTeam = int.Parse(model.MaxNrTeam);
            league.TvPartner = model.TvPartner;
            league.CurrentChampion = model.CurrentChampion;
            if (model.Logo != null)
            {
                var filePath = Path.Combine(_env.WebRootPath, "Upload", "Leagues"); ;

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }
                var fullPath = Path.Combine(_env.WebRootPath, "Upload", "Leagues", model.Logo.FileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    model.Logo.CopyTo(stream);
                }

                league.Logo = "https://localhost:5001/Upload/Leagues/" + model.Logo.FileName;
            }
            else
            {
                league.Logo = "Empty";
            }

            if (!LeagueExists(league.Id))
            {
                return NotFound();
            }
            else
            {
                _context.Leagues.Update(league);
                await _context.SaveChangesAsync();
            }
            return Ok();
        }

        // POST: api/Leagues
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<League>> PostLeague([FromForm]LeaguesAddModel model)
        {
            try {
                League league = new League();
                league.Name = model.Name;
                league.Country = model.Country;
                league.FoundedYear = int.Parse(model.FoundedYear);
                league.MaxNrTeam = int.Parse(model.MaxNrTeam);
                league.TvPartner = model.TvPartner;
                league.CurrentChampion = model.CurrentChampion;
                if (model.Logo != null)
                {
                    var filePath = Path.Combine(_env.WebRootPath, "Upload", "Leagues"); ;

                    if (!Directory.Exists(filePath))
                    {
                        Directory.CreateDirectory(filePath);
                    }
                    var fullPath = Path.Combine(_env.WebRootPath, "Upload", "Leagues", model.Logo.FileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        model.Logo.CopyTo(stream);
                    }

                    league.Logo = "https://localhost:5001/Upload/Leagues/" + model.Logo.FileName;
                }
                else
                {
                    league.Logo = "Empty";
                }


                _context.Leagues.Add(league);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception) {
                return StatusCode(StatusCodes.Status400BadRequest);
            }
           
        }

        // DELETE: api/Leagues/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<League>> DeleteLeague(string id)
        {
            var league = await _context.Leagues.FindAsync(int.Parse(id));
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

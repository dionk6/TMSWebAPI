using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TMSWebAPI.Models;
using TMSWebAPI.ViewModels;
using TMSWebAPI.ViewModels.Stadiums;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StadiumsController : ControllerBase
    {
        private readonly TMSContext _context;

        public StadiumsController(TMSContext context)
        {
            _context = context;
        }

        // GET: api/Stadiums
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stadium>>> GetStadiums()
        {
            return await _context.Stadiums.ToListAsync();
        }

        [HttpGet("StadiumsTable")]
        public IEnumerable<StadiumsViewModel> StadiumsTable()
        {
            var model = _context.Stadiums.Select(t => new StadiumsViewModel
            {
                Id = t.Id.ToString(),
                Name = t.Name,
                Capacity = t.Capacity.ToString(),
                Image = t.Image,
                Rank = t.Rank.ToString()
            });

            return model;
        }

        // GET: api/Stadiums/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Stadium>> GetStadium(int id)
        {
            var stadium = await _context.Stadiums.FindAsync(id);

            if (stadium == null)
            {
                return NotFound();
            }

            return stadium;
        }

        // PUT: api/Stadiums/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut]
        public async Task<IActionResult> PutStadium(StadiumsViewModel model)
        {
            Stadium stadium = new Stadium();
            stadium.Id = int.Parse(model.Id);
            stadium.Name = model.Name;
            stadium.Capacity = int.Parse(model.Capacity);
            stadium.Image = model.Image;
            stadium.Rank = int.Parse(model.Rank);

            if (!StadiumExists(stadium.Id))
            {
                return NotFound();
            }
            else
            {
                _context.Stadiums.Update(stadium);
                await _context.SaveChangesAsync();
            }
            return Ok();
        }

        [HttpGet("SelectStadiums")]
        public IEnumerable<SelectViewModel> SelectStadiums()
        {
            var model = _context.Stadiums.Select(t => new SelectViewModel
            {
                value = t.Id.ToString(),
                label = t.Name
            });
            return model;
        }

        // POST: api/Stadiums
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Stadium>> PostStadium(StadiumsViewModel model)
        {
            Stadium stadium = new Stadium();
            stadium.Name = model.Name;
            stadium.Capacity = int.Parse(model.Capacity);
            stadium.Image = model.Image;
            stadium.Rank = int.Parse(model.Rank);

            _context.Stadiums.Add(stadium);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/Stadiums/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Stadium>> DeleteStadium(string id)
        {
            var stadium = await _context.Stadiums.FindAsync(int.Parse(id));
            if (stadium == null)
            {
                return NotFound();
            }

            _context.Stadiums.Remove(stadium);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool StadiumExists(int id)
        {
            return _context.Stadiums.Any(e => e.Id == id);
        }
    }
}

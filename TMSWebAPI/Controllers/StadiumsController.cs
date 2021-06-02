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
using TMSWebAPI.ViewModels.Stadiums;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StadiumsController : ControllerBase
    {
        private readonly TMSContext _context;
        private readonly IWebHostEnvironment _env;

        public StadiumsController(TMSContext context,
                                    IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
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
        public async Task<IActionResult> PutStadium([FromForm] StadiumsAddModel model)
        {
            Stadium stadium = new Stadium();
            stadium.Id = int.Parse(model.Id);
            stadium.Name = model.Name;
            stadium.Capacity = int.Parse(model.Capacity);
            stadium.Rank = int.Parse(model.Rank);
            if (model.Image != null)
            {
                var filePath = Path.Combine(_env.WebRootPath, "Upload", "Stadiums"); ;

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }
                var fullPath = Path.Combine(_env.WebRootPath, "Upload", "Stadiums", model.Image.FileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    model.Image.CopyTo(stream);
                }

                stadium.Image = "https://localhost:5001/Upload/Stadiums/" + model.Image.FileName;
            }

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
        public async Task<ActionResult<Stadium>> PostStadium([FromForm] StadiumsAddModel model)
        {
            Stadium stadium = new Stadium();
            stadium.Name = model.Name;
            stadium.Capacity = int.Parse(model.Capacity);
            stadium.Rank = int.Parse(model.Rank);
            if (model.Image != null)
            {
                var filePath = Path.Combine(_env.WebRootPath, "Upload", "Stadiums"); ;

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }
                var fullPath = Path.Combine(_env.WebRootPath, "Upload", "Stadiums", model.Image.FileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    model.Image.CopyTo(stream);
                }

                stadium.Image = "https://localhost:5001/Upload/Stadiums/" + model.Image.FileName;
            }
            else
            {
                stadium.Image = "Empty";
            }

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

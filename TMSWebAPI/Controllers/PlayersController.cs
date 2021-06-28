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
using TMSWebAPI.ViewModels.Players;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        private readonly TMSContext _context;
        private readonly IWebHostEnvironment _env;

        public PlayersController(TMSContext context,
                                IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        // GET: api/Players
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Player>>> GetPlayers()
        {
            return await _context.Players.Where(t => t.IsDeleted == false).ToListAsync();
        }

        [HttpGet("PlayersTable")]
        public IEnumerable<PlayersTable> PlayersTable()
        {
            IEnumerable<PlayersTable> model = _context.Players.Where(t => t.IsDeleted == false).Include(t => t.Team).Select(t => new PlayersTable 
            {
                Id = t.Id.ToString(),
                FirstName = t.FirstName,
                LastName = t.LastName,
                Age = t.Age.ToString(),
                PlayerNo = t.PlayerNo,
                Position = t.Position,
                Photo = t.Photo,
                Kit = t.Kit,
                Price = t.Price.ToString(),
                Team = t.Team.Name,
                Bio = t.Bio
            });
            return model;
        }

        // GET: api/Players/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PlayersTable>> GetPlayer(int id)
        {
            var player = await _context.Players.Include(t => t.Team).Where(t => t.Id == id).FirstAsync();

            var model = new PlayersTable();
            model.Id = player.Id.ToString();
            model.FirstName = player.FirstName;
            model.LastName = player.LastName;
            model.Age = player.Age.ToString();
            model.PlayerNo = player.PlayerNo;
            model.Position = player.Position;
            model.Photo = player.Photo;
            model.Kit = player.Kit;
            model.Price = player.Price.ToString();
            model.Team = player.Team.Name;
            model.Bio = player.Bio;
            if (player == null)
            {
                return NotFound();
            }

            return model;
        }

        // PUT: api/Players/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut]
        public async Task<IActionResult> PutPlayer([FromForm] PlayersAddModel model)
        {
            Player player = await _context.Players.FindAsync(int.Parse(model.Id));
            player.FirstName = model.FirstName;
            player.LastName = model.LastName;
            player.Age = int.Parse(model.Age);
            player.PlayerNo = model.PlayerNo;
            player.Position = model.Position;
            player.Kit = model.Kit;
            player.Price = decimal.Parse(model.Price);
            if (int.Parse(model.TeamId) != 0)
            {
                player.TeamId = int.Parse(model.TeamId);
            }
            player.Bio = model.Bio;
            if (model.Photo != null)
            {
                var filePath = Path.Combine(_env.WebRootPath, "Upload", "Players");

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }
                var fullPath = Path.Combine(_env.WebRootPath, "Upload", "Players", model.Photo.FileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    model.Photo.CopyTo(stream);
                }

                player.Photo = "https://localhost:5001/Upload/Players/" + model.Photo.FileName;
            }

            if (!PlayerExists(player.Id))
            {
                return NotFound();
            }
            else
            {
                _context.Players.Update(player);
                await _context.SaveChangesAsync();
            }
            return Ok();
        }

        // POST: api/Players
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Player>> PostPlayer([FromForm] PlayersAddModel model)
        {
            Player player = new Player();
            player.FirstName = model.FirstName;
            player.LastName = model.LastName;
            player.Age = int.Parse(model.Age);
            player.PlayerNo = model.PlayerNo;
            player.Position = model.Position;
            player.Kit = model.Kit;
            player.Price = decimal.Parse(model.Price);
            if (int.Parse(model.TeamId) != 0)
            {
                player.TeamId = int.Parse(model.TeamId);
            }
            else
            {
                player.TeamId = _context.Teams.Where(t => t.IsDeleted == false).FirstOrDefault().Id;
            }
            player.Bio = model.Bio;
            player.IsDeleted = false;
            if (model.Photo != null)
            {
                var filePath = Path.Combine(_env.WebRootPath, "Upload", "Players"); ;

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }
                var fullPath = Path.Combine(_env.WebRootPath, "Upload", "Players", model.Photo.FileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    model.Photo.CopyTo(stream);
                }

                player.Photo = "https://localhost:5001/Upload/Players/" + model.Photo.FileName;
            }
            else
            {
                player.Photo = "Empty";
            }

            _context.Players.Add(player);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/Players/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Player>> DeletePlayer(string id)
        {
            var player = await _context.Players.FindAsync(int.Parse(id));
            if (player == null)
            {
                return NotFound();
            }

            player.IsDeleted = true;
            _context.Players.Update(player);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool PlayerExists(int id)
        {
            return _context.Players.Any(e => e.Id == id);
        }
    }
}

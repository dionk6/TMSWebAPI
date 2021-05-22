using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public PlayersController(TMSContext context)
        {
            _context = context;
        }

        // GET: api/Players
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Player>>> GetPlayers()
        {
            return await _context.Players.ToListAsync();
        }

        [HttpGet("PlayersTable")]
        public IEnumerable<PlayersTable> PlayersTable()
        {
            IEnumerable<PlayersTable> model = _context.Players.Include(t => t.Team).Select(t => new PlayersTable
            {
                Id = t.Id.ToString(),
                FirstName = t.FirstName,
                LastName = t.LastName,
                Age = t.Age.ToString(),
                PlayerNo = t.PlayerNo,
                Position = t.Position,
                Kit = t.Kit,
                Price = t.Price.ToString(),
                Team = t.Team.Name
            });
            return model;
        }

        // GET: api/Players/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> GetPlayer(int id)
        {
            var player = await _context.Players.FindAsync(id);

            if (player == null)
            {
                return NotFound();
            }

            return player;
        }

        // PUT: api/Players/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut]
        public async Task<IActionResult> PutPlayer(PlayersViewModel model)
        {
            Player player = new Player();
            player.Id = int.Parse(model.Id);
            player.FirstName = model.FirstName;
            player.LastName = model.LastName;
            player.Age = int.Parse(model.Age);
            player.PlayerNo = model.PlayerNo;
            player.Position = model.Position;
            player.Kit = model.Kit;
            player.Price = decimal.Parse(model.Price);
            player.TeamId = int.Parse(model.TeamId);

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
        public async Task<ActionResult<Player>> PostPlayer(PlayersViewModel model)
        {
            Player player = new Player();
            player.FirstName = model.FirstName;
            player.LastName = model.LastName;
            player.Age = int.Parse(model.Age);
            player.PlayerNo = model.PlayerNo;
            player.Position = model.Position;
            player.Kit = model.Kit;
            player.Price = decimal.Parse(model.Price);
            player.TeamId = int.Parse(model.TeamId);

            _context.Players.Add(player);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/Players/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Player>> DeletePlayer(int id)
        {
            var player = await _context.Players.FindAsync(id);
            if (player == null)
            {
                return NotFound();
            }

            _context.Players.Remove(player);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool PlayerExists(int id)
        {
            return _context.Players.Any(e => e.Id == id);
        }
    }
}

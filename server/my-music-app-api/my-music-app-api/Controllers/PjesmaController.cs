#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_music_app_api.Data;
using my_music_app_api.Models;

namespace my_music_app_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PjesmaController : ControllerBase
    {
        private readonly DataContext _context;

        public PjesmaController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Pjesma
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pjesma>>> GetPjesme()
        {
            return await _context.Pjesme.Include(i => i.Kategorija).ToListAsync();
        }

        // GET: api/Pjesma/5
        [HttpGet("{query}")]
        public ActionResult<List<Pjesma>> GetPjesma(String query)
        {
            var pjesma = _context.Pjesme.Where(p => p.NazivPjesme.Contains(query)).ToList();

            if (pjesma == null)
            {
                return NotFound();
            }

            return pjesma;
        }

        // PUT: api/Pjesma/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPjesma(int id, Pjesma pjesma)
        {
            if (id != pjesma.Id)
            {
                return BadRequest();
            }

            pjesma.DatumModifikovanja = DateTime.Now;
            _context.Entry(pjesma).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PjesmaExists(id))
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

        // POST: api/Pjesma
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("add")]
        public async Task<ActionResult<Pjesma>> PostPjesma(Pjesma pjesma)
        {
            _context.Pjesme.Add(pjesma);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostPjesma), new { id = pjesma.Id }, pjesma);
        }

        // DELETE: api/Pjesma/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePjesma(int id)
        {
            var pjesma = await _context.Pjesme.FindAsync(id);
            if (pjesma == null)
            {
                return NotFound();
            }

            _context.Pjesme.Remove(pjesma);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PjesmaExists(int id)
        {
            return _context.Pjesme.Any(e => e.Id == id);
        }
    }
}

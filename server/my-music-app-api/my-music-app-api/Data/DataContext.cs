using Microsoft.EntityFrameworkCore;
using my_music_app_api.Models;

namespace my_music_app_api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Kategorija> Kategorije { get; set; }

        public DbSet<Pjesma> Pjesme { get; set;}
    }
}

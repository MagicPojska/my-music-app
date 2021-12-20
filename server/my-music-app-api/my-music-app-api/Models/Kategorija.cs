using System.ComponentModel.DataAnnotations;

namespace my_music_app_api.Models
{
    public class Kategorija
    {
        public int Id { get; set; }
        
        [StringLength(30)]
        public string NazivKategorije { get; set; } = String.Empty;
    }
}

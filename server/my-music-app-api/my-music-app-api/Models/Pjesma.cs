using System.ComponentModel.DataAnnotations;

namespace my_music_app_api.Models
{
    public class Pjesma
    {
        public int Id { get; set; }

        [StringLength(30)]
        public string NazivPjesme { get; set; } = String.Empty;

        [StringLength(50)]
        public string NazivIzvodjaca { get; set;} = String.Empty;

        [StringLength(150)]
        public string UrlPjesme { get; set; } = String.Empty;

        [Range(1, 5)]
        public int Ocjena { get; set; }
        public bool IsFavorite { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime DatumUnosa { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime DatumModifikovanja { get; set; }

        public int KategorijaId { get; set; }
        public Kategorija? Kategorija { get; set; }


        public Pjesma()
        {
            IsFavorite = false;
            DatumUnosa = DateTime.Now;
            DatumModifikovanja = DateTime.Now;    
        }
    }
}

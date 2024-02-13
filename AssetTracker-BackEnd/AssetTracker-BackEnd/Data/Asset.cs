using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AssetTracker_BackEnd.Data
{
    public class Asset
    {
        public int Id { get; set; } //required by default

        [Required]
        public string Name { get; set; }

        public string? Make { get; set; }
        public string? Model { get; set; }

        [Required]
        public string Location { get; set; }

        public string? SerialNumber { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        [Required]
        public decimal PricePaid { get; set; }

        [Required]
        public DateOnly DatePurchased { get; set; }

        public DateOnly? WarrantyExpiration { get; set; }

        [Required]
        public string OwnerFirstName { get; set; }
        [Required]
        public string OwnerLastName { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace AssetTracker_BackEnd.Models.Asset
{
    public abstract class BaseAssetDto
    {
        [Required]
        public string Name { get; set; }

        public string? Make { get; set; }
        public string? Model { get; set; }

        [Required]
        public string Location { get; set; }

        public string? SerialNumber { get; set; }

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

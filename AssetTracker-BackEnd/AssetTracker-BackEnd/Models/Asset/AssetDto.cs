namespace AssetTracker_BackEnd.Models.Asset
{
    public class AssetDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Make { get; set; }
        public string? Model { get; set; }
        public string Location { get; set; }
        public string? SerialNumber { get; set; }
        public decimal PricePaid { get; set; }
        public DateOnly DatePurchased { get; set; }
        public DateOnly? WarrantyExpiration { get; set; }
        public string OwnerFirstName { get; set; }
        public string OwnerLastName { get; set; }
    }

}

using Microsoft.EntityFrameworkCore;

namespace AssetTracker_BackEnd.Data
{
    public class AssetTrackerDbContext : DbContext
    {
        public AssetTrackerDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Asset> Assets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Asset>().HasData(
                new Asset
                {
                    Id = 1,
                    Name = "Macbook Pro",
                    Make = "Apple",
                    Model = "M2 Pro",
                    Location = "Main Headquarters",
                    SerialNumber = "X3742GH59",
                    PricePaid = 2500.50m,
                    DatePurchased = new DateOnly(2024, 2, 13),
                    WarrantyExpiration = new DateOnly(2025, 2, 13),
                    OwnerFirstName = "Jay",
                    OwnerLastName = "Lightfoot"
                },
                new Asset
                {
                    Id = 2,
                    Name = "Tablet",
                    Make = "Acer",
                    Model = "Model Pro",
                    Location = "HR Building Room 12",
                    SerialNumber = "Z3742534TGH",
                    PricePaid = 450.25m,
                    DatePurchased = new DateOnly(2023, 1, 25),
                    WarrantyExpiration = new DateOnly(2024, 1, 25),
                    OwnerFirstName = "Cathie",
                    OwnerLastName = "Albridge"
                }

             );
        }
    }
}

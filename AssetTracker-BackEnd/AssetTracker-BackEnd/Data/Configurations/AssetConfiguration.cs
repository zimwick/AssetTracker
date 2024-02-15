using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AssetTracker_BackEnd.Data.Configurations
{
    public class AssetConfiguration : IEntityTypeConfiguration<Asset>
    {
        public void Configure(EntityTypeBuilder<Asset> builder)
        {
            builder.HasData(
                new Asset
                {
                    Id = 1,
                    Name = "Macbook",
                    Make = "Apple",
                    Model = "M2 Pro",
                    Location = "Main Headquarters",
                    SerialNumber = "X3742GH59",
                    PricePaid = 2500.50m,
                    DatePurchased = new DateOnly(2024, 2, 13),
                    WarrantyExpiration = new DateOnly(2025, 2, 13),
                    OwnerFirstName = "Teri",
                    OwnerLastName = "Schandler"
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
                },
                new Asset
                {
                    Id = 3,
                    Name = "Macbook",
                    Make = "Apple",
                    Model = "M1 Pro",
                    Location = "North 1st St, front office",
                    SerialNumber = "JDLSRU3957D",
                    PricePaid = 2000.00m,
                    DatePurchased = new DateOnly(2020, 8, 26),
                    WarrantyExpiration = new DateOnly(2021, 4, 3),
                    OwnerFirstName = "Trude",
                    OwnerLastName = "Bonner"
                },
                new Asset
                {
                    Id = 4,
                    Name = "Iphone",
                    Make = "Apple",
                    Model = "14 Pro Max",
                    Location = "Auditors office",
                    SerialNumber = "ASHDK32GH59",
                    PricePaid = 1000.00m,
                    DatePurchased = new DateOnly(2022, 5, 13),
                    WarrantyExpiration = new DateOnly(2023, 5, 13),
                    OwnerFirstName = "Cathie",
                    OwnerLastName = "Albridge"
                },
                new Asset
                {
                    Id = 5,
                    Name = "Surface",
                    Make = "Microsoft",
                    Model = "Surface Pro 8",
                    Location = "Main Headquarters",
                    SerialNumber = "SJGQRY5479",
                    PricePaid = 3000.00m,
                    DatePurchased = new DateOnly(2020, 1, 25),
                    WarrantyExpiration = new DateOnly(2022, 1, 25),
                    OwnerFirstName = "Skye",
                    OwnerLastName = "Howsam"
                },
                new Asset
                {
                    Id = 6,
                    Name = "Macbook",
                    Make = "Apple",
                    Model = "M2 Pro",
                    Location = "Main Headquarters",
                    SerialNumber = "XGHS342GH59",
                    PricePaid = 2500.50m,
                    DatePurchased = new DateOnly(2024, 2, 13),
                    WarrantyExpiration = new DateOnly(2025, 2, 13),
                    OwnerFirstName = "Marcelo",
                    OwnerLastName = "Fabler"
                },
                new Asset
                {
                    Id = 7,
                    Name = "Spectre",
                    Make = "Hp",
                    Model = "Spectre X5",
                    Location = "Testing Center",
                    SerialNumber = "NVHSLHGD234",
                    PricePaid = 2900.75m,
                    DatePurchased = new DateOnly(2019, 8, 5),
                    WarrantyExpiration = new DateOnly(2020, 8, 5),
                    OwnerFirstName = "Teri",
                    OwnerLastName = "Schandler"
                },
                new Asset
                {
                    Id = 8,
                    Name = "Iphone",
                    Make = "Apple",
                    Model = "12 Pro",
                    Location = "Main Headquarters",
                    SerialNumber = "VSJLE35SKC",
                    PricePaid = 800.00m,
                    DatePurchased = new DateOnly(2020, 3, 15),
                    WarrantyExpiration = new DateOnly(2021, 3, 15),
                    OwnerFirstName = "Tracie",
                    OwnerLastName = "Tomson"
                },
                new Asset
                {
                    Id = 9,
                    Name = "Aspire",
                    Make = "Acer",
                    Model = "A515",
                    Location = "Recovery Room",
                    SerialNumber = "SJCL2CH3SDGE",
                    PricePaid = 1500.50m,
                    DatePurchased = new DateOnly(2024, 2, 13),
                    WarrantyExpiration = new DateOnly(2025, 2, 13),
                    OwnerFirstName = "Jack",
                    OwnerLastName = "Black"
                },
                new Asset
                {
                    Id = 10,
                    Name = "Macbook",
                    Make = "Apple",
                    Model = "M3 Pro",
                    Location = "Main Headquarters",
                    SerialNumber = "AHSDL26D2V",
                    PricePaid = 2900.00m,
                    DatePurchased = new DateOnly(2023, 5, 22),
                    WarrantyExpiration = new DateOnly(2024, 5, 22),
                    OwnerFirstName = "Josh",
                    OwnerLastName = "Rainer"
                },
                new Asset
                {
                    Id = 11,
                    Name = "Iphone",
                    Make = "Apple",
                    Model = "14 Pro Max",
                    Location = "Main Headquarters",
                    SerialNumber = "SJDC30D23",
                    PricePaid = 1000.00m,
                    DatePurchased = new DateOnly(2024, 4, 05),
                    WarrantyExpiration = new DateOnly(2025, 4, 05),
                    OwnerFirstName = "Jeri",
                    OwnerLastName = "Cortex"
                }
             );
        }
    }
}

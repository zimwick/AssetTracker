using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AssetTracker_BackEnd.Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<ApiUser>
    {
        public void Configure(EntityTypeBuilder<ApiUser> builder)
        {
            var hasher = new PasswordHasher<ApiUser>();
            builder.HasData(
                 new ApiUser
                 {
                     Id = "145e934d-2fd7-4dcb-8261-0408715f5eb7",
                     Email = "admin@assettracker.com",
                     NormalizedEmail = "ADMIN@ASSETTRACKER.COM",
                     NormalizedUserName = "ADMIN@ASSETTRACKER.COM",
                     UserName = "admin@assettracker.com",
                     FirstName = "System",
                     LastName = "Admin",
                     PasswordHash = hasher.HashPassword(null, "WgUR@cks1@"),
                     EmailConfirmed = true

                 }
            );
        }
    }
}

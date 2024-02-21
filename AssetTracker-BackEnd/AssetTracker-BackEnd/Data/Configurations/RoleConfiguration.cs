using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AssetTracker_BackEnd.Data.Configurations
{
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
                new IdentityRole
                {
                    Id = "b331ce72-dc6e-4de8-a9f4-c5920fbabb97",
                    Name = "Administrator",
                    NormalizedName = "ADMINISTRATOR"
                    
                }
            );
        }
    }
}

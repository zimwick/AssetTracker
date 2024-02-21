using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace AssetTracker_BackEnd.Data.Configurations
{
    public class UserRoleConfiguration : IEntityTypeConfiguration<IdentityUserRole<string>>
    {
        public void Configure(EntityTypeBuilder<IdentityUserRole<string>> builder)
        {
            builder.HasData(
                new IdentityUserRole<string>
                {
                    RoleId = "b331ce72-dc6e-4de8-a9f4-c5920fbabb97",
                    UserId = "145e934d-2fd7-4dcb-8261-0408715f5eb7"
                }
            );
        }
    }
}

using AssetTracker_BackEnd.Data.Configurations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AssetTracker_BackEnd.Data
{
    public class AssetTrackerDbContext : IdentityDbContext<ApiUser>
    {
        public AssetTrackerDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Asset> Assets { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //roles seed data
            modelBuilder.ApplyConfiguration(new RoleConfiguration());

            //assets seed data
            modelBuilder.ApplyConfiguration(new AssetConfiguration());
        }
    }
}

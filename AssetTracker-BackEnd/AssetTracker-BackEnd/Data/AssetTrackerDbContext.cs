﻿using Microsoft.EntityFrameworkCore;

namespace AssetTracker_BackEnd.Data
{
    public class AssetTrackerDbContext : DbContext
    {
        public AssetTrackerDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}

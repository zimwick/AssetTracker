using AssetTracker_BackEnd.Contracts;
using AssetTracker_BackEnd.Data;

namespace AssetTracker_BackEnd.Repository
{
    public class AssetsRepository : GenericRepository<Asset>, IAssetsRepository
    {
        private readonly AssetTrackerDbContext _context;
        public AssetsRepository(AssetTrackerDbContext context) : base(context)
        {
            this._context = context;
        }
    }
}

using Microsoft.AspNetCore.Identity;

namespace AssetTracker_BackEnd.Data
{
    public class ApiUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}

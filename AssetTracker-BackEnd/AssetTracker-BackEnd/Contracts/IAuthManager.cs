using AssetTracker_BackEnd.Models.Users;
using Microsoft.AspNetCore.Identity;

namespace AssetTracker_BackEnd.Contracts
{
    public interface IAuthManager
    {
        Task<IEnumerable<IdentityError>> Register(ApiUserDto userDto);

        Task<AuthResponseDto> Login(LoginDto loginDto);
    }
}

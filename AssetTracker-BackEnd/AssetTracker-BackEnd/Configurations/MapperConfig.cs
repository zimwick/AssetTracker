using AssetTracker_BackEnd.Data;
using AssetTracker_BackEnd.Models.Asset;
using AutoMapper;

namespace AssetTracker_BackEnd.Configurations
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            CreateMap<Asset, CreateAssetDto>().ReverseMap();
            CreateMap<Asset, AssetDto>().ReverseMap();
            CreateMap<Asset, UpdateAssetDto>().ReverseMap();

        }
    }
}

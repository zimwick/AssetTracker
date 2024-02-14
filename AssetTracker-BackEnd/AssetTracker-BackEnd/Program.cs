using AssetTracker_BackEnd.Configurations;
using AssetTracker_BackEnd.Contracts;
using AssetTracker_BackEnd.Data;
using AssetTracker_BackEnd.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//sql server settings
var connectionString = builder.Configuration.GetConnectionString("AssetTrackerDbConnectionString");
builder.Services.AddDbContext<AssetTrackerDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});

//setting up users to authenticate with api using identitycore
builder.Services.AddIdentityCore<ApiUser>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<AssetTrackerDbContext>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//setting up automapper to auto map Assetcontroller to CreateAssetDto
builder.Services.AddAutoMapper(typeof(MapperConfig));

builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.AddScoped<IAssetsRepository, AssetsRepository>();
builder.Services.AddScoped<IAuthManager, AuthManager>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

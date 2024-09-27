# Use the official .NET image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["AssetTracker-BackEnd.csproj", "./"]
RUN dotnet restore "./AssetTracker-BackEnd.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "AssetTracker-BackEnd.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AssetTracker-BackEnd.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AssetTracker-BackEnd.dll"]

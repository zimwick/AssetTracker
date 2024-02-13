﻿// <auto-generated />
using System;
using AssetTracker_BackEnd.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AssetTracker_BackEnd.Migrations
{
    [DbContext(typeof(AssetTrackerDbContext))]
    partial class AssetTrackerDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("AssetTracker_BackEnd.Data.Asset", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateOnly>("DatePurchased")
                        .HasColumnType("date");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Make")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Model")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OwnerFirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OwnerLastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("PricePaid")
                        .HasColumnType("decimal(18, 2)");

                    b.Property<string>("SerialNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateOnly?>("WarrantyExpiration")
                        .HasColumnType("date");

                    b.HasKey("Id");

                    b.ToTable("Assets");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            DatePurchased = new DateOnly(2024, 2, 13),
                            Location = "Main Headquarters",
                            Make = "Apple",
                            Model = "M2 Pro",
                            Name = "Macbook Pro",
                            OwnerFirstName = "Jay",
                            OwnerLastName = "Lightfoot",
                            PricePaid = 2500.50m,
                            SerialNumber = "X3742GH59",
                            WarrantyExpiration = new DateOnly(2025, 2, 13)
                        },
                        new
                        {
                            Id = 2,
                            DatePurchased = new DateOnly(2023, 1, 25),
                            Location = "HR Building Room 12",
                            Make = "Acer",
                            Model = "Model Pro",
                            Name = "Tablet",
                            OwnerFirstName = "Cathie",
                            OwnerLastName = "Albridge",
                            PricePaid = 450.25m,
                            SerialNumber = "Z3742534TGH",
                            WarrantyExpiration = new DateOnly(2024, 1, 25)
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

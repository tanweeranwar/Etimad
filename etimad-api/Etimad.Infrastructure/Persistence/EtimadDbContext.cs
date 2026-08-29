using Etimad.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Etimad.Infrastructure.Persistence;

public sealed class EtimadDbContext : DbContext
{
    public EtimadDbContext(DbContextOptions<EtimadDbContext> options)
        : base(options)
    {
    }

    public DbSet<Lead> Leads => Set<Lead>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Lead>(entity =>
        {
            entity.ToTable("Leads");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Name)
                .HasMaxLength(100)
                .IsRequired();

            entity.Property(x => x.Company)
                .HasMaxLength(150);

            entity.Property(x => x.Email)
                .HasMaxLength(254)
                .IsRequired();

            entity.Property(x => x.Country)
                .HasMaxLength(100)
                .IsRequired();

            entity.Property(x => x.Service)
                .HasMaxLength(100)
                .IsRequired();

            entity.Property(x => x.Message)
                .HasMaxLength(5000)
                .IsRequired();

            entity.Property(x => x.Status)
                .HasConversion<int>()
                .IsRequired();

            entity.Property(x => x.CreatedAt)
                .IsRequired();

            entity.Property(x => x.UpdatedAt);
        });
    }
}
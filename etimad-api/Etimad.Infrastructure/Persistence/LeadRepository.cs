using Etimad.Application.Interfaces;
using Etimad.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Etimad.Infrastructure.Persistence;

public sealed class LeadRepository : ILeadRepository
{
    private readonly EtimadDbContext _dbContext;

    public LeadRepository(EtimadDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task AddAsync(
        Lead lead,
        CancellationToken cancellationToken = default)
    {
        await _dbContext.Leads.AddAsync(
            lead,
            cancellationToken);
    }

    public Task SaveChangesAsync(
        CancellationToken cancellationToken = default)
    {
        return _dbContext.SaveChangesAsync(cancellationToken);
    }
}
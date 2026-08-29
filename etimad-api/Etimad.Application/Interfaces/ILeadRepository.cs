using Etimad.Domain.Entities;

namespace Etimad.Application.Interfaces;

public interface ILeadRepository
{
    Task AddAsync(
        Lead lead,
        CancellationToken cancellationToken = default);

    Task SaveChangesAsync(
        CancellationToken cancellationToken = default);
}
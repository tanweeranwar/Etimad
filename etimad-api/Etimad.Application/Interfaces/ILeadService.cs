using Etimad.Application.Contracts.Leads;

namespace Etimad.Application.Interfaces;

public interface ILeadService
{
    Task<CreateLeadResponse> CreateAsync(
        CreateLeadRequest request,
        CancellationToken cancellationToken = default);
}